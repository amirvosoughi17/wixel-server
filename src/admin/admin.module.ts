import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';
import { AdminController } from './admin.controller';

@Module({
  providers: [AdminService, PrismaService],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
