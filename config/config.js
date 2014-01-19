module.exports = {
	http: {
		server: true,
		daemon: 'port', // 'port' or 'socket'
		port: 3000,
		socket: __dirname + '/../logs/wsocks-httpd.sock',
		uid: 'www-data',
		dirindex: ['index.html', 'index.htm'],
		mime: {
			html: 'text/html',
			htm : 'text/html',
			css : 'text/css',
			js  : 'application/javascript',
			jpg : 'image/jpeg',
			jpeg: 'image/jpeg',
			png : 'image/png',
			gif : 'image/gif',
			ico : 'image/x-icon'
		},
		access_log: ''
	},
	socketio: {}
};

