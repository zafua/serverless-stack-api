import handler from "./libs/handler-lib";
import db from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {

    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    const result = await db.query(params);

    return result.Items;
});