import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return user;
  }

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.findOne(createUserDto.username);
    if (user && user.password === createUserDto.password) {
      return { message: 'Login successful' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
