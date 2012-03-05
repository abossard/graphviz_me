var HOST = "0.0.0.0";
var PORT = process.env.PORT;
var express = require('express');
var app = module.exports = express.createServer();
var viewEngine = 'jade'; // modify for your view engine
// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', viewEngine);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
    console.log('Serving /');
    res.render('index', { title: 'Graphviz.me' });
});

app.listen(process.env.PORT, '0.0.0.0');
console.log('Started');
