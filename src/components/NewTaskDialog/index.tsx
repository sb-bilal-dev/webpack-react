import * as React from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  Select,
  MenuItem
} from "@material-ui/core";
import { TaskModel, ProjectModel } from "../../containers/Task/reducer";

export interface NewTaskDialogProps {
  open: boolean;
  onClose: () => void;
  projects: ProjectModel[];
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

const urgencyOptions: UrgencyOptionModel[] = [
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

  render() {
    const { open, onClose, projects } = this.props;
    const { title, body, project, urgency } = this.state;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create New Task</DialogTitle>
        <form>
          <TextField
            fullWidth
            value={title}
            name="title"
            onChange={this.onTextFieldChange}
          />
          <TextField
            fullWidth
            multiline
            value={body}
            name="body"
            onChange={this.onTextFieldChange}
          />
          <Select
            fullWidth
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
          <Select
            fullWidth
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
        </form>
      </Dialog>
    );
  }
}

export default NewTaskDialog;
