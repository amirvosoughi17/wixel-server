import { Test, TestingModule } from '@nestjs/testing';
import { ShowcaseService } from './showcase.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ShowcaseService', () => {
  let service: ShowcaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowcaseService, PrismaService],
    }).compile();

    service = module.get<ShowcaseService>(ShowcaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
