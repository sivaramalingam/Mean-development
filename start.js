var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path')
var app = connect();

app.use(serveStatic(__dirname+'/app/')).listen(9090, function(){
      console.log(path.resolve(__dirname+'/app/'));
    console.log('Server running on 9090...');
});
