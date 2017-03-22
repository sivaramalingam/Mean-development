'use strict';
module.exports = function(app) {
  var remainderList = require('../controllers/remainderController');

  // todoList Routes
  app.route('/registeration')
    .get(remainderList.list_all_users)
    .post(remainderList.create_a_user);


  app.route('/registeration/:_id')
    .get(remainderList.read_a_user)
    .put(remainderList.update_a_user)
    .delete(remainderList.delete_a_user);
};
