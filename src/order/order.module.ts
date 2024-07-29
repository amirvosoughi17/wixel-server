import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PrismaService } from '../prisma/prisma.service';
import { OrderController } from './order.controller';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [AdminModule],
  providers: [OrderService, PrismaService],
  controllers: [OrderController],
})
export class OrderModule {}
