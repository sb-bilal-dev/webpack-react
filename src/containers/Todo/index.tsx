import * as React from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import * as todoActions from "./actions";
import { TodoStore } from "./reducer";

type TodoProps = {
  dispatch: any;
  todo: TodoStore;
};

type TodoState = {
  value: string;
};

class Todo extends React.Component<TodoProps, TodoState> {
  state = {
    value: ""
  };

  componentDidMount() {
    this.props.dispatch(todoActions.getTodos());
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: e.target.value });

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.dispatch(todoActions.addTodo(this.state.value));
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    const {
      todo: { todos }
    } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          fdasfsda
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          {/* <TextField
            placeholder="Add todo..."
            onChange={this.handleChange}
            value={value}
          /> */}
        </form>
        <ul>
          {todos.map((todo: string) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Todo);
