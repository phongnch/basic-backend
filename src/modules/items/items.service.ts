import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(createItemDto);
    return newItem.save();
  }

  async update(id: string, createItemDto: CreateItemDto): Promise<Item> {
    return this.itemModel
      .findByIdAndUpdate(id, createItemDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
