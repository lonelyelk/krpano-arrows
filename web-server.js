#!/usr/bin/env node

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
var filePath = '.' + request.url;
var extname = path.extname(filePath);
var contentType = 'text/html';
switch (extname) {
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		contentType = 'text/css';
		break;
	case '.json':
		contentType = 'application/json';
		break;
	case '.png':
		contentType = 'image/png';
		break;      
	case '.jpg':
		contentType = 'image/jpg';
		break;
}

fs.readFile(filePath, function(error, content) {
	if (error) {
		switch (error.code) {
			case 'EISDIR':
				response.writeHead(302, { 'Location': './plugin-page/plugin.html' });
				response.end();
				break;
			case 'ENOENT':
				response.writeHead(404, { 'Content-Type': contentType });
				response.end('404 NotFound', 'utf-8');
				break;
			default:
				response.writeHead(500);
				response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
		}
	} else {
		response.writeHead(200, { 'Content-Type': contentType });
		response.end(content, 'utf-8');
	}
});

}).listen(8244);
console.log('Server running at http://127.0.0.1:8244/');
