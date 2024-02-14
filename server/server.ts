import { Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

const http: typeof import('http') = require('http');
const server: HttpServer = http.createServer((req, res) => {
});

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",         
    methods: ["GET", "POST"],     
  }
});


io.on('connection', (socket: Socket) => {
  
  socket.on('chat message', (message: string) => {
    io.emit('chat message', message)
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  });
});

server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001');
});
