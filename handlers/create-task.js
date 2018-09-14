function createTask(task){
  for (let property in task) {
    if (task.hasOwnProperty(property)) {
      console.log(task.hasOwnProperty(property))
    }
  }

  if (!task || !task.id || !task.title || !task.createdAt) {
    throw new Error('Missing task information')
  }

  return {}
}

module.exports = createTask
