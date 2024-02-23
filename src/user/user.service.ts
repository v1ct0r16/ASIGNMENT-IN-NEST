import { Injectable } from '@nestjs/common';
import { Userentity } from '../entities/user.entities';
import { UserController } from './user.controller';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../interface/user.interface';


@Injectable()
export class UserService {
  constructor(@InjectRepository(Userentity) userRepository:Repository<Userentity>){}
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