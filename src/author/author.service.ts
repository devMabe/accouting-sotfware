import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor() {}

  finOneById(id: number) {
    return {
      id,
      firstName: 'jose',
      lastName: 'benitez',
    };
  }
}
