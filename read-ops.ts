import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

const ddbDocClient = DynamoDBDocument.from(client);

ddbDocClient.get(
  {
    TableName: 'td_notes_test',
    Key: {
      user_id: 'A',
      timestamp: 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

ddbDocClient.query(
  {
    TableName: 'td_notes_test',
    KeyConditionExpression: 'user_id = :uid',
    ExpressionAttributeValues: {
      ':uid': 'A',
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

ddbDocClient.scan(
  {
    TableName: 'td_notes_test',
    FilterExpression: '#t = :t',
    ExpressionAttributeNames: {
      '#t': 'timestamp',
    },
    ExpressionAttributeValues: {
      ':t': 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

ddbDocClient.batchGet(
  {
    RequestItems: {
      td_notes_test: {
        Keys: [
          {
            user_id: 'A',
            timestamp: 1,
          },
          {
            user_id: 'B',
            timestamp: 2,
          },
        ],
      },
      td_notes: {
        Keys: [
          {
            user_id: 'lkgc9q4t',
            timestamp: 1707096925,
          },
        ],
      },
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
