import api from '../../utils/api'
import {
  PHOTO_GET_PHOTOS_REQUEST,
  PHOTO_GET_PHOTOS_SUCCESS,
  PHOTO_GET_PHOTOS_ERROR
} from './constants'

export const fetchPhotos = () => async dispatch => {
  dispatch({
    type: PHOTO_GET_PHOTOS_REQUEST
  })

  try {
    const payload = await api().get('/photos').then(response => response.data)

    dispatch({
      type: PHOTO_GET_PHOTOS_SUCCESS,
      payload: payload.slice(-10)
    })
  } catch (error) {
    dispatch({
      type: PHOTO_GET_PHOTOS_ERROR,
      error
    })
  }
}
