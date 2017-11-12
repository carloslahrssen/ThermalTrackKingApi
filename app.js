const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket)=>{
	setInterval(() =>{
		console.log('a user connected');
		socket.emit('temp',{temp:'temp'});
	}, 1000)
	//socket.emit('heartbeat', {heartbeat:heartbeat});
	//socket.emit('alert', {alert:alert});
	socket.on('disconnet', ()=>{
		console.log('A user disconnected');
	})
});
http.listen(3000, ()=>{
	console.log('Listening on 3000');
});