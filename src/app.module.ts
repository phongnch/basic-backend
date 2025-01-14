import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [ItemsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
