var express = require('express'); 
var swig = require('swig'); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan'); 


// var db 


var app = express(); 

// swig rendering boilerplate
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

// logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));

app.use(require('./routes'))


console.log('PROCESS ENV', process.env)

app.use(function (err, req, res, next) {

  res.status(err.status || 500)
  console.error(err, err.stack)
  // res.render('error', {
  //   error: err
  // })
})


var port = 3000; 
app.listen(port, function(){
  console.log("we're listening")
})














