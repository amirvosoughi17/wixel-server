import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Prisma, Order } from '@prisma/client';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getOrders() {
    return this.orderService.getOrders();
  }

  @Post()
  async createOrder(
    @Body() orderData: Prisma.OrderCreateInput,
  ) {
    const newOrder = await this.orderService.createOrder(orderData);
    return newOrder;
  }
}
