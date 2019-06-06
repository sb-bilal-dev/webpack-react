import * as React from "react";
import { connect } from "react-redux";

import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import * as taskActions from "./actions";
import { TaskModel, ProjectModel } from "./reducer";
import NewTaskDialog from "../../components/NewTaskDialog";
import { RootState } from "../../store/rootReducer";
import {
  projectsSlc,
  isLoadingTasksSlc,
  tasksErrorSlc,
  filterFieldProjectSlc,
  filteredTasksSlc,
  isAddTaskLoadingSlc
} from "./selectors";
import TaskTable from "../../components/TaskTable";
import { ErrorModel } from "../../components/RenderError";
import TaskTableHeader from "../../components/TaskTableHeader";
import { Classes, withClasses } from "./styles";
import { compose } from "redux";

type TaskProps = {
  dispatch: any;
  filteredTasks: TaskModel[];
  projects: ProjectModel[];
  isLoadingTasks: boolean;
  tasksError: null | ErrorModel;
  filterFieldProject: string;
  isAddTaskLoading: boolean;
  classes: Classes;
};

type TaskState = {
  isNewTaskDialogOpen: boolean;
};

class Task extends React.PureComponent<TaskProps, TaskState> {
  state = {
    isNewTaskDialogOpen: false
  };

  toggleNewTaskDialog = () => {
    this.setState({ isNewTaskDialogOpen: !this.state.isNewTaskDialogOpen });
  };

  onDialogClose = () => {
    this.setState({ isNewTaskDialogOpen: false });
  };

  addTask = async (newTask: TaskModel) => {
    await this.props.dispatch(taskActions.addTask(newTask));
    this.onDialogClose();
  };

  handleFilterByProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dispatch(taskActions.setFilterFieldProject(event.target.value));
  };

  componentDidMount() {
    this.props.dispatch(taskActions.getTasks());
    this.props.dispatch(taskActions.getProjects());
  }

  render() {
    const { isNewTaskDialogOpen } = this.state;
    const {
      projects,
      filteredTasks,
      isLoadingTasks,
      tasksError,
      filterFieldProject,
      isAddTaskLoading,
      classes
    } = this.props;

    return (
      <div>
        <NewTaskDialog
          open={isNewTaskDialogOpen}
          onClose={this.onDialogClose}
          projects={projects}
          isAddTaskLoading={isAddTaskLoading}
          addTask={this.addTask}
        />
        <TaskTableHeader
          handleFilterByProject={this.handleFilterByProject}
          filterFieldProject={filterFieldProject}
          projects={projects}
        />
        <TaskTable
          projects={projects}
          tasks={filteredTasks}
          isLoading={isLoadingTasks}
          error={tasksError}
        />
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.addButton}
          onClick={this.toggleNewTaskDialog}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default compose(
  connect((state: RootState) => ({
    filteredTasks: filteredTasksSlc(state),
    projects: projectsSlc(state),
    isLoadingTasks: isLoadingTasksSlc(state),
    tasksError: tasksErrorSlc(state),
    filterFieldProject: filterFieldProjectSlc(state),
    isAddTaskLoading: isAddTaskLoadingSlc(state)
  })),
  withClasses
)(Task);
