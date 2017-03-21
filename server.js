
var express = require('express'),
    app = express(),
    serveStatic = require('serve-static');

var mongoose = require('mongoose'),
    dataUrl = "mongodb://localhost:27017/remainder",

    schema = mongoose.Schema,

    userSchema = new schema({
      name: String,
      location: {type: String, unique: true},
      username: {type: String, unique:true, required: true},
      password: {type: String, required: true},
      created_at: Date,
      updated_at: Date
    }),

    users = mongoose.model('registeration', userSchema),

    firstUser = new users({
      name: 'siva2',
      location: 'madurai',
      username: 'siva2',
      password: "abcd$1234"
    });

    // module.exports = users;
    mongoose.connect(dataUrl, function(err){
      if(err)
        console.log(err)
      else {
        console.log("DB connected successfully!!!")
      }
    });

    firstUser.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully!');
    });


    app.use(serveStatic(__dirname+"/app")).listen(9000, function(){
      console.log("Node server running at 9000");
    });
