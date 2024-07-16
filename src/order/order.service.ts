import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order-dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrders(token: string): Promise<Order[]> {
    if (token) {
      return this.prisma.order.findMany();
    } else {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید !');
    }
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({ data: createOrderDto });
  }
  async deleteOrder(id: number, token: string): Promise<Order> {
    if (token) {
      return this.prisma.order.delete({ where: { id } });
    } else {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
