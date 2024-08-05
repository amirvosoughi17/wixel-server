import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [OrdersService , PrismaService , JwtService],
  controllers: [OrdersController]
})
export class OrdersModule {}
