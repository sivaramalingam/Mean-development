'use strict';

var mongoose = require('mongoose'),
  register = mongoose.model('registeration');

exports.list_all_users = function(req, res) {
  register.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_user = function(req, res) {
  var new_register = new register(req.body);
  new_register.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_user = function(req, res) {
  console.log(req.params)
  register.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_user = function(req, res) {
  register.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_user = function(req, res) {
  register.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'register successfully deleted' });
  });
};
