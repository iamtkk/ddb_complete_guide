import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

const ddbDocClient = DynamoDBDocument.from(client);
ddbDocClient.put({
  TableName: 'td_notes_test',
  Item: {
    user_id: 'E',
    timestamp: 14,
    title: 'Initial title',
    content: 'Initial content',
  },
  ConditionExpression: '#t <> :t',
  ExpressionAttributeNames: {
    '#t': 'timestamp',
  },
  ExpressionAttributeValues: {
    ':t': 14,
  },
});
