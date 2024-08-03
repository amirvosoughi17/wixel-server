import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminService } from 'src/admin/admin.service';

@Module({
  providers: [OrdersService , PrismaService , AdminService],
  controllers: [OrdersController]
})
export class OrdersModule {}
