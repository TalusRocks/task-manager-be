const tasks = require('../data/tasks.json')

function editTask(taskId, updatedTask){
  if (!taskId || !updatedTask) {
    throw new Error('Insufficient infromation to update task')
  }

  return {
    message: `Order ${taskId} was updated`
  }
  
}

module.exports = editTask
