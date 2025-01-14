import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
