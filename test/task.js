
var Task = require('task-model');
var assert = require('assert');

describe('Task model', function () {

  var task;

  before(function() {
    task = new Task({
      "id": 1,
      "title": "Move the lawn",
      "assignee": "Henrik Kjelsberg",
      "email": "hkjels@me.com",
      "priority": "medium",
      "estimate": 3
    });
  });

  it ('should return a valid model-instance', function(done) {
    assert(task.assignee() == 'Henrik Kjelsberg');
    assert(task.photo == 'https://secure.gravatar.com/avatar/b816a20e685a01bcf8b9e230fe23db09?d=retro&r=g');
    done();
  });

});

