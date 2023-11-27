import {
  CreateTableCommand,
  CreateTableCommandInput,
  DeleteTableCommand,
  DescribeTableCommand,
  DynamoDBClient,
  ListTablesCommand,
  UpdateTableCommand,
} from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

// const input = {
//   TableName: 'Music',
// };

// const input = {
//   TableName: 'Music',
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 2,
//     WriteCapacityUnits: 1,
//   },
// };

// const input = {
//   TableName: 'td_notes_test',
// };

// const input: CreateTableCommandInput = {
//   AttributeDefinitions: [
//     {
//       AttributeName: 'Artist',
//       AttributeType: 'S',
//     },
//     {
//       AttributeName: 'SongTitle',
//       AttributeType: 'S',
//     },
//   ],
//   KeySchema: [
//     {
//       AttributeName: 'Artist',
//       KeyType: 'HASH',
//     },
//     {
//       AttributeName: 'SongTitle',
//       KeyType: 'RANGE',
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1,
//   },
//   TableName: 'Music',
// };

const main = async () => {
  try {
    const command = new ListTablesCommand({});
    // const command = new DescribeTableCommand(input);
    // const command = new CreateTableCommand(input);
    // const command = new UpdateTableCommand(input);
    // const command = new DeleteTableCommand(input);
    const response = await client.send(command);
    // console.log(`response : ${JSON.stringify(response.TableNames, null, 2)}`);
    console.log(`response : ${JSON.stringify(response, null, 2)}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

main();
