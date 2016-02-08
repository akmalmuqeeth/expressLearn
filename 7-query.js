var express = require('express');
var app = express();

app.get('/search', function(req,res){

  // official solution
  //var query = req.query
  //res.send(query)

  var results = req.query.results;
  var type = req.query['type'];
  var page = req.query['page'];
  res.send({'results' : results, type : type, page : page});

});

app.listen(process.argv[2]);
