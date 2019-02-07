import * as React from 'react'
import { inject, observer } from 'mobx-react'
import TodoStore from '../../store/TodoStore'

export type TodoProps = {
  todo: TodoStore 
}

export type TodoState = {
  value: string
}

@inject('todo')
@observer
class Todo extends React.Component<TodoProps, TodoState> {
  state = {
    value: ''
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    this.props.todo.addTodo(this.state.value)
    this.setState({ value: '' })
  }
  
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value })
  }

  render () {
    const {
      todo: { todos }
    } = this.props

    return (
      <div>
        <form>
          <input
            placeholder='Add todo...'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <ul>
          {todos.map((todo: string) => (<li>{todo}</li>))}
        </ul>
      </div>
    )
  }
}

export default Todo
