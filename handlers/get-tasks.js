const tasks = require('../data/tasks.json')

function getTasks(taskId){
  if (!taskId) {
    return tasks
  }

  const task = tasks.find((el) => {
    return el.id == taskId
  })

  if (task) {
    return task
  }

  throw new Error('The task you requested was not found')

}

module.exports = getTasks
