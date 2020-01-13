const apiURL = 'http://localhost:3001'

export const get = endpoint =>
  fetch(`${apiURL}${endpoint}`).then(res => res.json())

export const post = (endpoint, body) =>
  fetch(`${apiURL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
