import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedRequest } from 'src/auth/authenticated-request.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;

    if (!user || user.role !== 'ADMIN') {
      throw new ForbiddenException('You do not have permission to access this resource');
    }

    return true;
  }
}
