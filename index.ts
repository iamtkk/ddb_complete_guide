import { ListTablesCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const client = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: fromIni({ profile: 'iamtk-sb' }),
});

export const main = async () => {
  try {
    const command = new ListTablesCommand({});
    const response = await client.send(command);
    console.log(`response : ${JSON.stringify(response.TableNames)}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
