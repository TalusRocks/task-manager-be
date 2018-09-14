const Api = require('claudia-api-builder')
const api = new Api()
const getTasks = require('./handlers/get-tasks')
const createTask = require('./handlers/create-task')

api.get('/', () => 'Welcome to the Task Manager API')

api.get('/tasks', () => {
  return getTasks()
})

api.get('/tasks/{id}', (request) => {
  return getTasks(request.pathParams.id)
}, {
  error: 404
})

api.post('/tasks', (request) => {
  return createTask(request.body)
}, {
  success: 201,
  error: 400
})

module.exports = api
