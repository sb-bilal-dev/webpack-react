import api from '../../utils/api'
import { Dispatch } from 'redux';

export const ADD_TODO = 'ADD_TODO'
export const TODO_GET_TODOS_REQUEST = 'TODO_GET_TODOS_REQUEST'
export const TODO_GET_TODOS_SUCCESS = 'TODO_GET_TODOS_SUCCESS'
export const TODO_GET_TODOS_ERROR = 'TODO_GET_TODOS_ERROR'

export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload
})

export const getTodos = () => async (dispatch: Dispatch) => {
  dispatch({
    type: TODO_GET_TODOS_REQUEST
  })

  try {
    const payload = await api().get('/todos').then(response => response.data)

    dispatch({
      type: TODO_GET_TODOS_SUCCESS,
      payload
    })
  } catch (error) {
    dispatch({
      type: TODO_GET_TODOS_ERROR,
      error
    })
  }
}
