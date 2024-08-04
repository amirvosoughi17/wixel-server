import { Controller, Post, Body, Res, Get, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { Response, Request } from 'express';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin.dto';
import { AdminGuard } from 'src/guard/admin.guard';

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
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.adminService.generateToken();
    res.cookie('auth_token', token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, 
      path: '/', 
    });
  }

  @Get('check')
  @UseGuards(AdminGuard)
  async checkAdmin(@Req() req: Request): Promise<{ message: string }> {
    return { message: 'You are authenticated' };
  }
}
