import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user.interface';
// import { UserController } from './user.controller';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  createUser(user: User){
 return this.users.push(user);
 
  }

  findAll(): User[] {
    return this.users;
  }
}