'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    userSchema = new Schema({
      name: {type:String, required: true},
      location: {type: String, unique: true},
      username: {type: String, unique:true, required: true},
      password: {type: String, required: true},
      created_at: {type: Date, default: Date.now}
    });

module.exports = mongoose.model('registeration', userSchema);

// var TaskSchema = new Schema({
//   name: {
//     type: String,
//     Required: 'Kindly enter the name of the task'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
// });
