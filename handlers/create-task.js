function createTask(newTask){
  for (let property in newTask) {
    if (newTask.hasOwnProperty(property)) {
      console.log(newTask.hasOwnProperty(property))
    }
  }

  if (!newTask || !newTask.id || !newTask.title || !newTask.createdAt) {
    throw new Error('Missing newTask information')
  }

  return {}
}

module.exports = createTask
