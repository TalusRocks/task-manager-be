const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getTasks(taskId){
  if (typeof taskId === 'undefined') {
    return docClient.scan({
      TableName: 'tasks'
    }).promise()
      .then(result => result.Items)
  }

  return docClient.get({
    TableName: 'tasks',
    Key: {
      taskId: taskId
    }
  }).promise()
    .then(result => result.Item)

  throw new Error('The task you requested was not found')
}

module.exports = getTasks
