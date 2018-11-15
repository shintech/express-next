import C from '../constants'

export default {
  fetch: function (data) {
    return {
      type: C.FETCH_ABOUT,
      payload: data
    }
  }
}
