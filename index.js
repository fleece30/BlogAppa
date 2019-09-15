var express = require('express');
var app = express();

app.get('*', function (req, res) {
    res.send('hells world')
  })
  
  app.listen(8080, function(){
      console.log("listening to posrt 8080");
  });