const tasks = require('../data/tasks')

function deleteTask(taskId){
  if (!taskId) {
    throw new Error('Could not find the task to delete')
  }

  return {}
}

module.exports = deleteTask
