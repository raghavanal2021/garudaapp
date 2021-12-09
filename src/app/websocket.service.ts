import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

const wsurl = environment.SOCKET_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class SocketService{
  socket;
  
  constructor() { }
  

  setupSocketConnection() {
    this.socket = io(wsurl);
    this.socket.emit('start','start');
    this.socket.on('frontend',(data) => {
      console.log(data);
    });
  }

  disconnect() {
    this.socket.disconnect()
  }

  }