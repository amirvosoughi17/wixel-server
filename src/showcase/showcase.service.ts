import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShowcaseDto } from './dto/createShowcase.dto';
import { UpdateShowcaseDto } from './dto/updateShowcase.dto';

@Injectable()
export class ShowcaseService {
  constructor(private prisma: PrismaService) {}
  async createShowcase(createShowCaseDto: CreateShowcaseDto) {
    return this.prisma.showcase.create({
      data: createShowCaseDto,
    });
  }
  async allShowcases() {
    return this.prisma.showcase.findMany();
  }
  async updateShowCase(id: number, updateShowCaseDto: UpdateShowcaseDto) {
    return this.prisma.showcase.update({
      where: { id },
      data: updateShowCaseDto,
    });
  }

  async deleteShowcase(id: number) {
    return this.prisma.showcase.delete({
      where: { id },
    });
  }
}
