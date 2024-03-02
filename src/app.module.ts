import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserEntity } from './entities/user.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'introduction',
    entities: [UserEntity],
    synchronize: true,
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  
   
  
})
export class AppModule {} 
