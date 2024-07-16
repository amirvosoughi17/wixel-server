import { Injectable , UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';

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

  async createOrder(createOrderDto: any): Promise<Order> {
    return this.prisma.order.create({ data: createOrderDto });
  }
}
