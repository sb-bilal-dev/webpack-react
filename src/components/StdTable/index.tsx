import * as React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  withStyles
} from "@material-ui/core";
import { TaskModel } from "../../containers/Task/reducer";
import RenderError, { ErrorModel } from "../RenderError";

export interface StdTableProps {
  tasks: TaskModel[];
  isLoading: boolean;
  error: null | ErrorModel;
}

const StdTable = React.memo(({ tasks, isLoading, error }: StdTableProps) => {
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
                <TableCell>{task.project}</TableCell>
                <TableCell>{task.urgency}</TableCell>
                <TableCell>{task.body}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
});

export default StdTable;
