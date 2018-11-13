import fetch from 'isomorphic-fetch'

export default {
  fetch: function fetchTrees () {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch('http://localhost:8000/api/trees', options).then(response => response.json())
  }
}
