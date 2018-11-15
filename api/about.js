import fetch from 'isomorphic-fetch'

export default {
  fetch: function (baseURL) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`${baseURL}/api/about`, options).then(response => response.json())
  }
}
