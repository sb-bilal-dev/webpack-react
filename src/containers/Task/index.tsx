import * as React from "react";
import { connect } from "react-redux";

import * as taskActions from "./actions";
import { TaskModel, ProjectModel } from "./reducer";
import NewTaskDialog from "../../components/NewTaskDialog";
import { RootState } from "../../store/rootReducer";
import { tasksSlc, projectsSlc } from "./selectors";

type TaskProps = {
  dispatch: any;
  tasks: TaskModel[];
  projects: ProjectModel[];
};

type TaskState = {
  isNewTaskDialogOpen: boolean;
};

class Task extends React.Component<TaskProps, TaskState> {
  state = {
    isNewTaskDialogOpen: true
  };

  onDialogClose = () => {
    this.setState({ isNewTaskDialogOpen: false });
  };

  componentDidMount() {
    this.props.dispatch(taskActions.getProjects());
  }

  render() {
    const { isNewTaskDialogOpen } = this.state;
    const { projects } = this.props;

    return (
      <div>
        <NewTaskDialog
          open={isNewTaskDialogOpen}
          onClose={this.onDialogClose}
          projects={projects}
        />
      </div>
    );
  }
}

export default connect((state: RootState) => ({
  tasks: tasksSlc(state),
  projects: projectsSlc(state)
}))(Task);
