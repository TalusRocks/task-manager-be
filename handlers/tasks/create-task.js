const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createTask(newTask){
  if (!newTask || !newTask.title) {
    throw new Error('Missing newTask information')
  }

  let newItem = {
    taskId: uuid(),
    title: newTask.title,
    notes: []
  }

  return docClient.put({
    TableName: 'tasks',
    Item: newItem
  }).promise()
    .then((res) => {
      console.log('Task saved!', res)
      console.log('newItem:', newItem);
      return newItem
    })
    .catch((error) => {
      console.log('Task not saved', error);
      throw error
    })
}

module.exports = createTask
