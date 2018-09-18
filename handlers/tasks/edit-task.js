const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function editTask(taskId, updatedTask){
  if (!taskId || !updatedTask) {
    throw new Error('Insufficient infromation to update task')
  }

  return docClient.update({
    TableName: 'tasks',
    Key: {
      taskId: taskId
    },
    UpdateExpression: 'set title = :t',
    ExpressionAttributeValues: {
      ':t': updatedTask.title
    },
    ReturnValues: 'ALL_NEW'
  }).promise()
    .then((res) => {
      console.log('Task updated!', res)
      return res
    })
    .catch((error) => {
      console.log('Task not updated', error);
      throw error
    })
}

module.exports = editTask
