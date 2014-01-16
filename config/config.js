module.exports = {
	http: {
		server: true,
		daemon: 'socket', // 'port' or 'socket'
		port: 3000,
		socket: __dirname + '/../logs/wsocks-httpd.sock',
		uid: 'www-data',
		access_log: ''
	},
	socketio: {}
};

