import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ItemsModule, PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
