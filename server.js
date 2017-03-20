
var express = require('express'),
    app = express(),
    serveStatic = require('serve-static');


    app.use(serveStatic(__dirname+"/app")).listen(9000, function(){
      console.log("Node server running at 9000");
    });
