import * as todoActions from './actions'

const initialState = {
  todos: [
    'add redux'
  ]
}

const todoReducer = (state = initialState, action) => {
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
