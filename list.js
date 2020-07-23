import handler from "./libs/handler-lib";
import db from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {

    console.log("procs1" + process);
    console.log("procs2" + process.env);
    console.log("procs3" + process.env.tableName);
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