import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  async getOrders() {
    return this.prisma.order.findMany();
  }
  async deleteOrder(id: number): Promise<any> {
    return this.prisma.order.delete({ where: { id } });
  }
}
