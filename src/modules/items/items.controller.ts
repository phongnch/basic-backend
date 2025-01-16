import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('items')
@ApiBearerAuth()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto, @Headers() headers: any) {
    console.log(headers);

    return this.itemsService.create(createItemDto, 1);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createItemDto: CreateItemDto) {
    return this.itemsService.update(id, createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemsService.delete(id);
  }
}
