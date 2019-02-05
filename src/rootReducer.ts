import { combineReducers } from 'redux'

export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState { 
  todos: TodoModel[] 
}

export const todoReducer = (state: TodoState = { todos: [] }, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      }
  }
}

export interface RootState {
  todo: TodoState,
}

export const rootReducer = combineReducers({
  todo: todoReducer,
})
