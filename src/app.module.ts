import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userentity } from './entities/user.entities';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'introduction',
    entities: [Userentity],
    synchronize: true,
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  
   
  
})
export class AppModule {} 
