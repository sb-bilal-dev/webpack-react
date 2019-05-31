import * as React from "react";
import { connect } from "react-redux";

import * as taskActions from "./actions";
import { TaskModel, ProjectModel } from "./reducer";
import NewTaskDialog from "../../components/NewTaskDialog";
import { RootState } from "../../store/rootReducer";
import {
  tasksSlc,
  projectsSlc,
  isLoadingTasksSlc,
  tasksErrorSlc
} from "./selectors";
import StdTable from "../../components/StdTable";
import { ErrorModel } from "../../components/RenderError";

type TaskProps = {
  dispatch: any;
  tasks: TaskModel[];
  projects: ProjectModel[];
  isLoadingTasks: boolean;
  tasksError: null | ErrorModel;
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

  addTask = (newTask: TaskModel) => {
    this.props.dispatch(taskActions.addTask(newTask));
  };

  componentDidMount() {
    this.props.dispatch(taskActions.getProjects());
  }

  render() {
    const { isNewTaskDialogOpen } = this.state;
    const { projects, tasks, isLoadingTasks, tasksError } = this.props;

    return (
      <div>
        <NewTaskDialog
          open={isNewTaskDialogOpen}
          onClose={this.onDialogClose}
          projects={projects}
          addTask={this.addTask}
        />
        <StdTable tasks={tasks} isLoading={isLoadingTasks} error={tasksError} />
      </div>
    );
  }
}

export default connect((state: RootState) => ({
  tasks: tasksSlc(state),
  projects: projectsSlc(state),
  isLoadingTasks: isLoadingTasksSlc(state),
  tasksError: tasksErrorSlc(state)
}))(Task);
