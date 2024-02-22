import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from 'src/interface/user.interface';
import { Userentity } from 'src/entities/user.entities';


@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}
  

  @Get('findUser')
  async findAll(): Promise<Userentity[]> {
    return this.userService.findAll();
  }

  @Post('createUser')
  // @UsePipes(new ValidationPipe())
  async createUser(@Body() user: Userentity){
    return this.userService.createUser(user);
  }

}


