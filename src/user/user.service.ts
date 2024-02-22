import { Injectable } from '@nestjs/common';
import { Userentity } from 'src/entities/user.entities';
// import { User } from 'src/interface/user.interface';
import { UserController } from './user.controller';
import { Repository } from 'typeorm';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class UserService {
  private readonly users: Userentity[] = [];

  createUser(user: Userentity){
 return this.users.push(user);
 
  }

  findAll(): Userentity[] {
    return this.users;
  }
}

// @Injectable()
// export class UserService{
//   constructor(
//     // @u(Userentity)
//     private users: Repository<Userentity>,
//   ) {}

//   findAll(): Promise<Userentity[]> {
//     return this.users.find();
//   }

//   createUser(user: Userentity){
//     return this.users.find();
    
//      }

//   findOne(id: number): Promise<Userentity | null> {
//     return this.users.findOneBy({ id });
//   }

//   async remove(id: number): Promise<void> {
//     await this.users.delete(id);
//   }
// }