import { Module } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { ShowcaseController } from './showcase.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ShowcaseService, PrismaService , JwtService],
  controllers: [ShowcaseController],
})
export class ShowcaseModule {}
