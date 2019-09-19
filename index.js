var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');
var cors = require('cors');
var authentication = require('./routes/authentication')(router);
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log('Nope ',err);
    }
    else{
        console.log(config.db);
    }
});


app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));
app.use('/authentication', authentication);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
  })
  
  app.listen(8080, function(){
      console.log("listening to port 8080");
  });