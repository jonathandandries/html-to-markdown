'use strict';

const toMarkdown = require('to-markdown');

exports.htmlToMarkdown = function(args, res, next) {
  /**
   * Convert HTML to Markdown
   * Returns the resulting markdown content
   *
   * body String HTML to reformat as Markdown
   * no response value expected for this operation
   **/
   res.end(toMarkdown(args.body.value));
}
