import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { CreateShowcaseDto } from './dto/createShowcase.dto';
import { UpdateShowcaseDto } from './dto/updateShowcase.dto';
import { AdminGuard } from 'src/guard/admin.guard';

@Controller('showcases')
export class ShowcaseController {
  constructor(
    private readonly showCaseService: ShowcaseService,
  ) {}

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() createShowCaseDto: CreateShowcaseDto) {
    return this.showCaseService.createShowcase(createShowCaseDto);
  }

  @Get()
  async getAllShowcases() {
    return this.showCaseService.allShowcases();
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: number) {
    return this.showCaseService.deleteShowcase(id);
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: number,
    @Body() updateShowCaseDto: UpdateShowcaseDto,
  ) {
    return this.showCaseService.updateShowCase(id, updateShowCaseDto);
  }
}

