import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UserService, PrismaService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
