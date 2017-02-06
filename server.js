
var express = require('express'),
    app = express(),
    serveStatic = require('serve-static');

var databaseUrl = "mongodb://localhost:27017/remainder",
    collections = ["register"],
    mongo = require("mongodb"),
    mongoServer = mongo.Server,
    mongoDb = mongo.Db,
    serverd = new mongoServer("localhost",27017,{auto_reconnect: true}),
    db = new mongoDb('remainder', serverd);
    db.open(function(err, db){
      if(!err){
        console.log('Mongo db connected!!!');
        var collectionsRef = db.collection("register");
        //Insert Data into MongoDB
          // dataVar = ({"userId":"0005", "name":"test5", "lastname":"test", "address":"MDU"});
          //
          // collectionsRef.insert(dataVar, function(err, result){
          //   console.log("inserted successfully!!!");
          // });

          //update data into MongoDB
          // collectionsRef.update({userId:"0001"}, {address:"chennai-100"}, function(err){
          //   if(!err)
          //   console.log(err)
          // });

          //Remove Data from MongoDB
          // collectionsRef.remove({"userId":"0005"}, 1);

          //Show from MongoDB collections
          // collectionsRef.find({}, function(err, cursor){
          //   cursor.toArray(function(err, data){
          //     console.log(data)
          //   });
          // });
      }
    });

    // mongo.connect(databaseUrl, collections, function(err, dbn){
    // });

    app.use(serveStatic(__dirname+"/app")).listen(9000, function(){
      console.log("Node server running at 9000");
    });
