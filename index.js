
/**
 * Module dependencies.
 */

var model = require('model')
  , gravatar = require('gravatar')
  , isFibonacci = require('is-fibonacci');

/**
 * Check if string is a priority-string.
 *
 * @param {String} str
 */

function isPriority(str) {
  var priorities = ['very-low', 'low', 'medium', 'high', 'very-high'];
  return priorities.indexOf(str);
}

/**
 * Task.
 */

var Task = model('Task')
  .attr('id', { required: true, type: 'number' })
  .attr('title', { required: true, type: 'string' })
  .attr('assignee', { type: 'string' })
  .attr('email', { type: 'string' })
  .attr('priority', { type: 'string', validate: isPriority })
  .attr('estimate', { type: 'number', min: 0, max: 13, validate: isFibonacci });

/**
 * Assignee photo.
 */

Task.prototype.photo = function() {
  var url = gravatar.url(this.email(), {
    "d": "retro",
    "r": "g"
  });
  return url;
};

/**
 * Expose `Task`.
 */

module.exports = Task;

