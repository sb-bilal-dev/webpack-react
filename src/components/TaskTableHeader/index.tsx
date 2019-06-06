import * as React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ProjectModel } from "../../containers/Task/reducer";
import { Classes, withClasses } from "./styles";

export interface TaskTableHeaderProps {
  filterFieldProject: string;
  handleFilterByProject: (event: React.ChangeEvent<HTMLInputElement>) => void;
  projects: ProjectModel[];
  classes: Classes;
}

const TaskTableHeader = React.memo(
  ({
    filterFieldProject,
    handleFilterByProject,
    projects,
    classes
  }: TaskTableHeaderProps) => (
    <div className={classes.root}>
      <FormControl className={classes.projectField}>
        <InputLabel htmlFor="project">Project</InputLabel>
        <Select
          value={filterFieldProject}
          onChange={handleFilterByProject}
          inputProps={{
            name: "project"
          }}
        >
          <MenuItem value="">All</MenuItem>
          {projects.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
);

export default withClasses(TaskTableHeader);
