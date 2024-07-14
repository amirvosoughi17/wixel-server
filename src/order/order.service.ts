import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Order } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrders() {
    return this.prisma.order.findMany();
  }

  async createOrder(data: Prisma.OrderCreateInput){
    return this.prisma.order.create({ data });
  }
}
