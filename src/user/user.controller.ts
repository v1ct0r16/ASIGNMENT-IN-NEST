import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';


@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}
  

  @Get('findUser')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('createUser')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() user: User){
    return this.userService.createUser(user);
  }

}


