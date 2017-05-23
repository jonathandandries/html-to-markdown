'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const toMarkdown = require('to-markdown');
const actuator = require('express-actuator');
const url = require('url');
const swagger = require("swagger-node-express");

// Constants
const PORT = 8080;

// App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(actuator('/health'));

const subpath = express();
app.use("/v1", subpath);
swagger.setAppHandler(subpath);

// body-parser docs: https://github.com/expressjs/body-parser#bodyparserrawoptions
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text());

app.get('/', function (req, res) {
  res.send(toMarkdown('<h1>Hello world!</h1>'));
});

var htmlToMarkdown = {
  'spec': {
    "description" : "Returns the resulting markdown content",
    "path" : "/to-markdown",
    "notes" : "",
    "summary" : "Convert HTML to Markdown",
    "method": "POST",
    "parameters" : [swagger.bodyParam("html", "HTML to reformat as Markdown", "string")],
    "type" : "string",
    "nickname" : "htmlToMarkdown"
  },
  'action': function (req,res) {
    res.send(toMarkdown(req.body));
  }
}
swagger.addPost(htmlToMarkdown);

swagger.configure("http://localhost", "1.0.0");

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
