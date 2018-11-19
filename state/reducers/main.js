import C from 'state/constants'

const initialState = {
  inProp: false
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.TOGGLE_IN:
      return { ...state, inProp: action.payload }
    default:
      return state
  }
}

export default trees
