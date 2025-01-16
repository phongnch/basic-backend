import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        password: createUserDto.password,
      },
    });
    return newUser;
  }

  async findOne(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
