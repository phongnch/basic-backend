import { Injectable } from '@nestjs/common';
import { Item } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany();

    return items;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = await this.prisma.item.create({
      data: {
        name: createItemDto.name,
        description: createItemDto.description,
      },
    });
    return newItem;
  }
}
