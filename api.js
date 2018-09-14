const Api = require('claudia-api-builder')
const api = new Api()
const getTasks = require('./handlers/get-tasks')

api.get('/', () => 'Welcome to the Task Manager API')

api.get('/tasks', () => {
  return getTasks()
})

api.get('/tasks/{id}', (request) => {
  return getTasks(request.pathParams.id)
}, {
  error: 404
})

module.exports = api
