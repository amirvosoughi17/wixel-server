import {
  ValidationPipe,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,PUT,PATCH,POST,DELETE,',
    credentials: true,
  };

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = validationErrors.map(
          (error) =>
            `${error.property}: ${Object.values(error.constraints).join(', ')}`,
        );
        return new BadRequestException(errors);
      },
    }),
  );

  app.enableCors(corsOptions);
  app.use(cookieParser());
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 4000);
}

bootstrap();
