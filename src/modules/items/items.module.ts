import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService],
})
export class ItemsModule {}
