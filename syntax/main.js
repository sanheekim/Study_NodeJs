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
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    /* if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    } */

    // console.log(url.parse(_url, true).pathname);

    if(pathname === '/'){ // path가 /(루트)라면 = path가 없는 경우로 접속했다면
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200);
        response.end(template); 
  });
} else {
  fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
    var title = queryData.id;
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
    `;
    response.writeHead(200);
    response.end(template);
  });
}
} else {
  response.writeHead(404);
  response.end('Not found');
}
});
app.listen(3000); // 3000은 port 번호