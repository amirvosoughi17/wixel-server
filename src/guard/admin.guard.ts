import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly adminService: AdminService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authToken = request.cookies?.auth_token;

    if (!authToken || !this.adminService.isAdminUser(authToken)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }

    return true;
  }
}
