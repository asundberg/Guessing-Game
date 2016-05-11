/* jshint node: true */
'use strict';

// Strict mode does two main things:
// 1) Prevents the 'this' keyword from being the global object by default, e.g. window object. In Node it would be the 'node global'. Makes it equal null instead.
// 2) Prevents you from using variables without declaring them.  

var http = require('http');
var fs = require('fs');

var server = http.createServer(
	// The above is the same as if we wrote 'require('http').createServer', but it's common practice to assign modules to variables. 'http' is a built-in module of Node. You know it's built-in (or third party = downloaded fromt the internet) because it doesn't have a path (path to a local file, ie no '/' or dots..)

	// Now we need to create a callback function.
	function(request, response) {
		// Now we need to make sure our website has some content, which is done through 'response.write()'.
		console.log(request.url);
		// The browser automatically searches for favicons, even if the html file doesn't specify one. So when that happens, we don't want to return anything on that call.
		if(request.url.match(/\.ico$/)) {
			response.end();
			return;
		} else if(fs.existsSync('.' + request.url)) {
			response.write(fs.readFileSync('.' + request.url).toString());
		} else {
			response.write(fs.readFileSync('./index.html'));
		}
		response.end();
	}

);

server.listen(1234);