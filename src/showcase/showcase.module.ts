import { Module } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { ShowcaseController } from './showcase.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminService } from 'src/admin/admin.service';

@Module({
  providers: [ShowcaseService , PrismaService , AdminService],
  controllers: [ShowcaseController]
})
export class ShowcaseModule {}
