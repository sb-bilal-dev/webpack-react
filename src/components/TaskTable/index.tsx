import * as React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";
import { TaskModel, ProjectModel } from "../../containers/Task/reducer";
import RenderError, { ErrorModel } from "../RenderError";
import path from "ramda/es/path";
import { urgencyOptions } from "../NewTaskDialog";

export interface TaskTable {
  tasks: TaskModel[];
  isLoading: boolean;
  error: null | ErrorModel;
  projects: ProjectModel[];
}

const TaskTable = React.memo(
  ({ tasks, isLoading, error, projects }: TaskTable) => {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Urgency</TableCell>
              <TableCell>Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error && <RenderError error={error} />}
            {isLoading && "Loading..."}
            {!error &&
              !isLoading &&
              tasks.map(task => (
                <TableRow key={task.id}>
                  <TableCell component="th" scope="row">
                    {task.title}
                  </TableCell>
                  <TableCell>
                    {path(["name"], projects.find(p => p.id === task.project))}
                  </TableCell>
                  <TableCell>
                    {path(
                      ["label"],
                      urgencyOptions.find(u => u.value === task.urgency)
                    )}
                  </TableCell>
                  <TableCell>{task.body}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
);

export default TaskTable;
