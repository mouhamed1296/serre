/* eslint-disable prettier/prettier */
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
import { AuthService } from './auth.service';
import { serialService } from '../serial/serial.service';

@WebSocketGateway({
  cors: true,
  namespace: 'auth',
})
export class AuthGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly authService: AuthService) { }

  private port = serialService.getPort();

  private parser = serialService.getParser();

  @WebSocketServer()
  public server: Server;

  public socket: Socket;

  @SubscribeMessage('arrosage_on')
  handleArrosageOn(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    serialService.writeToPort('1' );
  }

  @SubscribeMessage('arrosage_off')
  handleArrosageOff(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    serialService.writeToPort('0');
  }

  @SubscribeMessage('toit_ouvert')
  handleToitOn(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    serialService.writeToPort('o');
  }

  @SubscribeMessage('toit_ferme')
  handleToitOff(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    serialService.writeToPort('f');
  }

  @SubscribeMessage('port_status')
  handlePortStatus(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): any {
    if (this.port.isOpen) {
      client.emit('systeme_on', 'Port ouvert');
    } else {
      client.emit('systeme_off', 'Port fermé');
    }
  }

  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]): any {
    client.emit('hello', 'Hello client!');
    this.parser.on('data', (data) => {
      const values = data.split('/');
      const pompe = parseFloat(values[4]);
      const toit = parseFloat(values[5]);
      const fan = parseFloat(values[6]);

      client.emit('pompe_status', pompe);
      client.emit('toit_status', toit);
      client.emit('fan_status', fan);
    });
    if (!this.port.isOpen) {
      setInterval(() => {
        this.port.open((err) => {
          if (err && err.message !== 'Port is already open') {
            client.emit('error_systeme', err.message);
            return console.log('Error opening port: ', err.message);
          } else {
            client.emit('systeme_on', 'Port ouvert');
          }
        });
      }, 1000);
    }

    this.parser.on('data', (data) => {
      const values = data.split('/');
      const rfid = values[7];
      
      if(rfid){
        this.authService.loginRfid({ rfId: rfid }).then((res) => {
          client.emit('auth', res);
        });
      }
    });
  }

  handleDisconnect(@ConnectedSocket() client: any): any {
    client.leave();
  }
}
