var fs = require('fs');
var http = require('http');

// 設定ファイル
var configPath = __dirname + '/../config/config.js';
if (!fs.existsSync(configPath)) throw new Error('Not Exist ' + configPath);
var config = require(__dirname + '/../config/config');

if (!config.http) throw new Error('Not Exist http identifier on config.');
if (!config.http.port) throw new Error('Not Exist http.port identifier on config.');
if (!config.http.uid) throw new Error('Not Exist http.uid identifier on config.');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('process: ' + process.pid);
});
server.listen(config.http.port, function () {
	process.setuid(config.http.uid);
});
