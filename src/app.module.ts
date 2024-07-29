import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { ShowcaseModule } from './showcase/showcase.module';

@Module({
  imports: [PrismaModule, AdminModule, ShowcaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
