import util from "util";
import AWS from "aws-sdk";

let logs;

AWS.config.logger = { log: debug };

export default function debug() {
    logs.push({
        date: new Date(),
        string: util.format.apply(null, arguments)
    });
}

export default function init(event, context) {
    logs = [];

    debug("API event" , {
        body: event.body,
        pathParameters: event.pathParameters,
        queryStringParameters: event.queryStringParameters
    });
}

export function flush(e) {
    logs.forEach(({date,string}) => console.debug(date,string));
    console.error(e);
}