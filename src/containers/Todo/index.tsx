import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from './actions'
import { TodoStore } from './reducer'

type TodoProps = {
  dispatch: Dispatch
  todo: TodoStore
}

type TodoState = {
  value: string
}

class Todo extends React.Component<TodoProps, TodoState> {
  state = {
    value: ''
  }

  componentDidMount () {
    this.props.dispatch(todoActions.getTodos())
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value })

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.dispatch(todoActions.addTodo(this.state.value))
    this.setState({ value: '' })
  }

  render () {
    const { value } = this.state
    const {
      todo: { todos }
    } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Add todo...'
            onChange={this.handleChange}
            value={value}
          />
        </form>
        <ul>
          {todos.map((todo: string) => (<li>{todo}</li>))}
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(Todo)
