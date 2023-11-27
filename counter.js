import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

const ddbDocClient = DynamoDBDocument.from(client);
ddbDocClient.udpate({
  TableName: 'td_notes_test',
  Key: {
    user_id: 'E',
    timestamp: 14,
  },
  UpdateExpression: 'set #n = #n + :value',
  ExpressionAttributeNames: {
    '#n': 'views',
  },
  ExpressionAttributeValues: {
    ':value': 1,
  },
});
