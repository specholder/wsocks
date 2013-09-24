/*
 * サーバー起動
 *
 */

var fs = require('fs');
var http = require('http');

// 設定ファイル
var confPath = __dirname + '/../conf/wsocks.conf';
if (!fs.existsSync(confPath)) errorExit("not exist conf/wsocks.conf");



// 共用関数
function errorExit (mess) {
	console.log(mess);
	process.exit(1);
}
