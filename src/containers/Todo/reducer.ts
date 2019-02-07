import { Action } from 'redux'
import * as todoActions from './actions'

export interface TodoStore {
  todos: string[]
}

const initialState: TodoStore = {
  todos: [
    'add redux'
  ]
}

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return {
        todos: [action.payload, ...state.todos]
      }
    default:
      return state
  }
}

export default todoReducer
