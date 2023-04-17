import { HttpException, HttpStatus } from '@nestjs/common';

export class IncorrectCredentialsException extends HttpException {
  constructor(message = 'Email ou mot de passe incorrect') {
    super(message, HttpStatus.FORBIDDEN);
  }
}
