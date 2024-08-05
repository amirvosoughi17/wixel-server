import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  async findAll(@Req() req) {
    return this.ordersService.getOrders();
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(Number(id));
  }
}
