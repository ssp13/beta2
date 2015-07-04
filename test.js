var http =require('http');
var express= require('express');
var app = express();
function censor(censor) {
  var i = 0;

  return function(key, value) {
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;  
  }
}

var server= http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"application/json"})
res.end(JSON.stringify(req, censor(req)))
	console.log(req);

})

server.listen(4000)
