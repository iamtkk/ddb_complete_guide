import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

const ddbDocClient = DynamoDBDocument.from(client);

// ddbDocClient.put({
//   TableName: 'td_notes_test',
//   Item: {
//     user_id: 'D',
//     timestamp: 12,
//     title: 'my title',
//     content: 'my content',
//   },
// });

// ddbDocClient.update({
//   TableName: 'td_notes_test',
//   Key: {
//     user_id: 'D',
//     timestamp: 12,
//   },
//   UpdateExpression: 'set #t = :t',
//   ExpressionAttributeNames: {
//     '#t': 'title',
//   },
//   ExpressionAttributeValues: {
//     ':t': 'updated title',
//   },
// });

// ddbDocClient.delete({
//   TableName: 'td_notes_test',
//   Key: {
//     user_id: 'D',
//     timestamp: 12,
//   },
// });

ddbDocClient.batchWrite({
  RequestItems: {
    td_notes_test: [
      {
        PutRequest: {
          Item: {
            user_id: 'D',
            timestamp: 12,
            title: 'my title',
            content: 'my content',
          },
        },
      },
      {
        PutRequest: {
          Item: {
            user_id: 'D',
            timestamp: 13,
            title: 'my title 2',
            content: 'my content 2',
          },
        },
      },
      { DeleteRequest: { Key: { user_id: 'D', timestamp: 11 } } },
    ],
  },
});
