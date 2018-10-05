const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createNote(taskId, newNote){
  if (!newNote) {
    throw new Error('Missing newNote information')
  }
  return docClient.update({
    TableName: 'tasks',
    Key: {
      'taskId': taskId
    },
    UpdateExpression: 'SET #notes = list_append(#notes, :notes)',
    ExpressionAttributeNames: {
      '#notes': 'notes'
    },
    ExpressionAttributeValues: {
      ':notes': [
        {
          'noteId': uuid(),
          'text': newNote.text,
          'status': newNote.status
        }
      ]
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

module.exports = createNote
