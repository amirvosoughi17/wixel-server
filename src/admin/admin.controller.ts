// src/admin/admin.controller.ts
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Res,
  Get,
  Headers ,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Response  , Request} from 'express';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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
  @Get('check')
  async checkAdmin(@Req() req: Request): Promise<void> {
    const cookies = req.headers.cookie;
    const token = this.extractTokenFromCookies(cookies);
    if (!this.adminService.isAdminUser(token)) {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromCookies(cookies: string): string {
    if (!cookies) {
      return '';
    }
    const match = cookies.match(/auth_token=([^;]+)/);
    return match ? match[1] : '';
  }
}
