const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function deleteTask(taskId){
  if (!taskId) {
    throw new Error('Could not find the task to delete')
  }

  return docClient.delete({
    TableName: 'tasks',
    Key: {
      taskId: taskId
    }
  }).promise()
    .then((res) => {
      console.log('Task deleted!', res)
      return res
    })
    .catch((error) => {
      console.log('Task not deleted', error);
      throw error
    })
}

module.exports = deleteTask
