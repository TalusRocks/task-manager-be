const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createTask(newTask){
  if (!newTask || !newTask.title) {
    throw new Error('Missing newTask information')
  }

  return docClient.put({
    TableName: 'tasks',
    Item: {
      taskId: uuid(),
      title: 'This is headed to Dynamo!'
    }
  }).promise()
    .then((res) => {
      console.log('Task saved!', res)
      return res
    })
    .catch((error) => {
      console.log('Task not saved', error);
      throw error
    })
}

module.exports = createTask
