import { Injectable } from '@nestjs/common';
import { Item } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany();

    return items;
  }

  // async findByOwnerId(ownerId: string): Promise<Item[]> {
  //   const items = await this.prisma.item.findMany({
  //     where: { owner: ownerId },
  //   });

  //   return items;
  // }

  async create(createItemDto: CreateItemDto, id: number): Promise<Item> {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const newItem = await this.prisma.item.create({
      data: {
        name: createItemDto.name,
        description: createItemDto.description,
        userId: user.id,
      },
    });

    return newItem;
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const updatedItem = await this.prisma.item.update({
      where: { id: Number(id) },
      data: updateItemDto,
    });
    return updatedItem;
  }

  async delete(id: string): Promise<Item> {
    const deletedItem = await this.prisma.item.delete({
      where: { id: Number(id) },
    });
    return deletedItem;
  }
}
