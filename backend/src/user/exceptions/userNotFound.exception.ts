import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(message = 'Ce compte est inexistant') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
