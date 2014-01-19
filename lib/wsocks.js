var fs = require('fs');
var http = require('http');

// 設定ファイル
var configPath = __dirname + '/../config/config.js';
if (!fs.existsSync(configPath)) throw new Error('Not Exist ' + configPath);
var config = require(configPath.replace(/\.js$/, ''));

if (!('http' in config)) throw new Error('Not Exist http identifier on config.');
if (!('server' in config.http)) throw new Error('Not Exist http.server identifier on config.');
if (config.http.server) {
	if (!('daemon' in config.http)) throw new Error('Not Exist http.daemon identifier on config.');
	if (config.http.daemon != 'port' && config.http.daemon != 'socket') throw new Error('Only set \'port\' or \'socket\' to http.daemon identifier on config.');
	var daemon;
	if (config.http.daemon == 'port') {
		if (!('port' in config.http)) throw new Error('Not Exist http.port identifier on config.');
		if (!isFinite(config.http.port)) throw new Error('Set number to http.port identifier on config.');
		daemon = config.http.port;
	}
	if (config.http.daemon == 'socket') {
		if (!('socket' in config.http)) throw new Error('Not Exist http.socket identifier on config.');
		daemon = config.http.socket
	}
	if (!('mime' in config.http)) throw new Error('Not Exist http.mime identifier on config.');
	if (!('uid' in config.http)) throw new Error('Not Exist http.uid identifier on config.');
	var server = http.createServer(function (req, res) {
		console.log(req.url);
		var regexp = new RegExp("");
		res.writeHead(200);
		res.end('process: ' + process.pid);
	});
	server.listen(daemon, function () {
		process.setuid(config.http.uid);
	});
}
