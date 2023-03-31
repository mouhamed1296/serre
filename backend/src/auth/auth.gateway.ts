import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { AuthService } from './auth.service';

@WebSocketGateway({
  cors: true,
  namespace: 'auth',
})
export class AuthGateway implements OnGatewayConnection, OnGatewayDisconnect {
  /* private port = new SerialPort({
    path: 'COM10',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    //autoOpen: true,
    //flowControl: false,
  });

  port.open((err) => {
  if (err) {
    client.emit('error_systeme', err.message);
    return console.log('Error opening port: ', err.message);
  } else {
  client.emit('systeme_on', 'Port ouvert');
}
});

private parser: = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));*/

  constructor(private readonly authService: AuthService) {}

/*   private port = new SerialPort({
    path: '/dev/ttyACM1',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
  }); */

  //private parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

  @WebSocketServer()
  public server: Server;

  public socket: Socket;

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): string {
    console.log('message', payload);
    return payload;
  }

  @SubscribeMessage('open_port')
  handleOpenPort(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    /* this.port.open((err) => {
      if (err.message !== 'Port is already open') {
        client.emit('error_systeme', err.message);
        return console.log('Error opening port: ', err.message);
      }
    }); */
  }

  @SubscribeMessage('port_status')
  handlePortStatus(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
/*     if (this.port.isOpen) {
      client.emit('systeme_on', 'Port ouvert');
    } else {
      client.emit('systeme_off', 'Port fermé');
    } */
  }

  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]): any {
    client.emit('hello', 'Hello client!');
    //client.join('room');
    /* this.parser.on('data', (data) => {
      //client.emit('data', data);
      this.authService.loginRfid({ rfId: data }).then((res) => {
        client.emit('auth', res);
      });
    }); */

    // Send message to all clients in the room
    //client.to('room').emit('message', 'Hello everyone!');

    // Send message to all clients in the room except the sender
    //client.to('room').emit('message', 'Hello everyone except sender!');
  }

  handleDisconnect(@ConnectedSocket() client: any): any {
    client.leave();
  }
}
