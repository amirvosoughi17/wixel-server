import { Controller, Post, Body, Get, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from '../user/user.service';
import { AuthenticatedRequest } from './authenticated-request.interface';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';  

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,  
  ) {}

  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    const { email, password } = body;
    const user = await this.userService.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = await this.authService.login(user); 
    return { token };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: AuthenticatedRequest) {
    const userId = req.user.userId; 
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
