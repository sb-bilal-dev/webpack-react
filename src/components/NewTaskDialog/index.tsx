import * as React from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  Select,
  MenuItem,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel
} from "@material-ui/core";
import * as moment from "moment";
import { ProjectModel, TaskModel } from "../../containers/Task/reducer";
import genId from "../../utils/genId";
import { withClasses, Classes } from "./styles";

export interface NewTaskDialogProps {
  open: boolean;
  onClose: () => void;
  projects: ProjectModel[];
  addTask: (task: TaskModel) => void;
  isAddTaskLoading: boolean;
  classes: Classes;
}

export interface NewTaskDialogState {
  title: string;
  body: string;
  project: string;
  urgency: string;
}

export interface UrgencyOptionModel {
  label: string;
  value: string;
}

export const urgencyOptions: UrgencyOptionModel[] = [
  { label: "Низкая", value: "low" },
  { label: "Обычная", value: "middle" },
  { label: "Высокая", value: "high" }
];

class NewTaskDialog extends React.PureComponent<
  NewTaskDialogProps,
  NewTaskDialogState
> {
  state = {
    title: "",
    body: "",
    project: "",
    urgency: "middle"
  };

  onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value
    } as any);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask = {
      ...this.state,
      date: moment()
        .utc()
        .format("YYYY-MM-DD hh:mm:ss"),
      id: genId()
    };
    this.props.addTask(newTask);
  };

  render() {
    const { open, onClose, projects, isAddTaskLoading, classes } = this.props;
    const { title, body, project, urgency } = this.state;

    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs">
        <form>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <TextField
              required
              className={classes.marginBottom10}
              fullWidth
              value={title}
              label="Title"
              name="title"
              onChange={this.onTextFieldChange}
            />
            <TextField
              required
              className={classes.marginBottom10}
              fullWidth
              multiline
              label="Text"
              value={body}
              name="body"
              onChange={this.onTextFieldChange}
            />
            <FormControl fullWidth className={classes.marginBottom10}>
              <InputLabel htmlFor="project">Project</InputLabel>
              <Select
                value={project}
                onChange={this.onTextFieldChange}
                inputProps={{
                  name: "project"
                }}
              >
                <MenuItem value="">None</MenuItem>
                {projects.map(({ name, id }: ProjectModel) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth className={classes.marginBottom10}>
              <InputLabel htmlFor="urgency">Urgency</InputLabel>
              <Select
                value={urgency}
                onChange={this.onTextFieldChange}
                inputProps={{
                  name: "urgency"
                }}
              >
                {urgencyOptions.map(({ label, value }: UrgencyOptionModel) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={this.handleSubmit}
                disabled={isAddTaskLoading}
                color="primary"
                type="submit"
              >
                Submitting...
              </Button>
            </DialogActions>
            Submit
          </DialogContent>
        </form>
      </Dialog>
    );
  }
}

export default withClasses(NewTaskDialog);
