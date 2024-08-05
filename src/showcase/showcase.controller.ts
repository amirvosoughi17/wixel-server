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
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('showcases')
export class ShowcaseController {
  constructor(private readonly showCaseService: ShowcaseService) {}

  @Post()
  async create(@Body() createShowCaseDto: CreateShowcaseDto) {
    return this.showCaseService.createShowcase(createShowCaseDto);
  }

  @Get()
  async getAllShowcases() {
    return this.showCaseService.allShowcases();
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.showCaseService.deleteShowcase(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateShowCaseDto: UpdateShowcaseDto,
  ) {
    return this.showCaseService.updateShowCase(id, updateShowCaseDto);
  }
}
