const toMarkdown = require('to-markdown');

// See node-lambda:
// https://www.npmjs.com/package/node-lambda
exports.handler = (event, context, callback) => {
    var markdown=toMarkdown(event.body);
    console.log(event);
    var response = {
        statusCode: 200,
        headers: {},
        body: markdown
    };
    callback(null, response);
};
