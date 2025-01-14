import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.itemsService.findOne(id);
  // }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() createItemDto: CreateItemDto) {
  //   return this.itemsService.update(id, createItemDto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.itemsService.delete(id);
  // }
}
