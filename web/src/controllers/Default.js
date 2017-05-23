'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.htmlToMarkdown = function htmlToMarkdown (req, res, next) {
  Default.htmlToMarkdown(req.swagger.params, res, next);
};
