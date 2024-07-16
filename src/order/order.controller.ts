import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  UnauthorizedException,
  Req,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { AdminService } from '../admin/admin.service';
import { CreateOrderDto } from './dto/create-order-dto';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly adminService: AdminService,
  ) {}

  @Get()
  async findAll(@Req() req: Request) {
    const token = req.cookies?.auth_token;
    if (!token || !this.adminService.isAdminUser(token)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }
    return this.orderService.getOrders(token);
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    const token = req.cookies?.auth_token;
    if (!token || !this.adminService.isAdminUser(token)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }
    return this.orderService.createOrder(createOrderDto);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string, @Req() req: Request) {
    const token = req.cookies['auth_token'];
    if (!token || !this.adminService.isAdminUser(token)) {
      throw new UnauthorizedException('Unauthorized');
    }
    return this.orderService.deleteOrder(Number(id), token);
  }
}
