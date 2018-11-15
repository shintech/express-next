import fetch from 'isomorphic-fetch'

export default {
  fetch: function (baseURL) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`${baseURL}/api/trees`, options).then(response => response.json())
  }
}
