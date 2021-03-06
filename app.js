const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket)=>{
	socket.on('temp', (data)=>{
		socket.emit('temp-ui', {temp:data.temp});
	});
	//socket.emit('heartbeat', {heartbeat:heartbeat});
	//socket.emit('alert', {alert:alert});
	socket.on('disconnect', ()=>{
		console.log('A user disconnected');
	})
});
http.listen(3000, ()=>{
	console.log('Listening on 3000');
});