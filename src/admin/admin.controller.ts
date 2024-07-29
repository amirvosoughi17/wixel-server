// src/admin/admin.controller.ts
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) {}

  @Post('login')
  async login(
    @Body() credentials: AdminLoginDto,
    @Res() res: Response,
  ): Promise<void> {
    const isAdminValid = await this.adminService.validateAdmin(credentials);
    if (!isAdminValid) {
      throw new UnauthorizedException('اطلاعات به درستی وارد نشده است !');
    }

    const token = this.adminService.generateToken();
    res.cookie('auth_token', token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.send({ message: 'Login successful' });

  }
}
