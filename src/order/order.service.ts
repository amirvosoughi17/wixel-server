import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order-dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrders(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }
}
