// 9강 : URL의 이해

// http://opentutorials.org:3000/main?id=HTML&page=12
// http : protocol
// opentutorials.org : host(domain)
// 3000 : port
// main : path
// id=HTML&page=12 : query string

var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000); // 3000은 port 번호