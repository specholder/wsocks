/*
 * サーバー起動
 *
 */

var fs = require('fs');
var http = require('http');

// 設定ファイル
if (!fs.existsSync(__dirname + '/../conf/wsocks.conf')) {
	console.log("not exist conf/wsocks.conf");
	process.exit(1);
}

