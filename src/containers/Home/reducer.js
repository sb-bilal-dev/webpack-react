import {
  PHOTO_GET_PHOTOS_REQUEST,
  PHOTO_GET_PHOTOS_ERROR,
  PHOTO_GET_PHOTOS_SUCCESS
} from './constants'

const initialState = {
  photos: [],
  loading: false,
  error: null
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_GET_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case PHOTO_GET_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case PHOTO_GET_PHOTOS_SUCCESS:
      return {
        loading: false,
        photos: action.payload
      }
    default:
      return state
  }
}

export default photoReducer
