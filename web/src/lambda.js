const toMarkdown = require('to-markdown');

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
