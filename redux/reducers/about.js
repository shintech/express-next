import C from '../constants'

const initialState = {
  data: '',
  title: ''
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.FETCH_ABOUT:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default trees
