
var express = require('express'),
    app = express(),
    serveStatic = require('serve-static');

    app.use(serveStatic(__dirname+"/app"), function(){
      console.log("Node server running at 9000");
    });
    app.listen('9000');

var databaseUrl = "sampledb",
    collections = ["register"],
    db = require("mongo");
    db.connect(databaseUrl, collections, function(){
      console.log("db connected!!!")
    });
