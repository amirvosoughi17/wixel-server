import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PrismaModule, ShowcaseModule, OrdersModule, UserModule, AuthModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
