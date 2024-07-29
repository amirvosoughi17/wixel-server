import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  UnauthorizedException,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { AdminService } from 'src/admin/admin.service';
import { CreateShowcaseDto } from './dto/createShowcase.dto';
import { UpdateShowcaseDto } from './dto/updateShowcase.dto';

@Controller('showcases')
export class ShowcaseController {
  constructor(
    private readonly showCaseService: ShowcaseService,
    private readonly adminService: AdminService,
  ) {}

  @Post()
  async create(@Body() createShowCaseDto: CreateShowcaseDto, @Req() req) {
    const authToken = req.cookies?.auth_token;
    if (!authToken || !this.adminService.isAdminUser(authToken)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }
    return this.showCaseService.createShowcase(createShowCaseDto);
  }
  @Get()
  async getAllShowcases() {
    return this.showCaseService.allShowcases();
  }

  @Delete(':id')
  async delete(@Param('id') id: number, @Req() req) {
    const authToken = req.cookies?.auth_token;
    if (!authToken || !this.adminService.isAdminUser(authToken)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }
    return this.showCaseService.deleteShowcase(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateShowCaseDto: UpdateShowcaseDto,
    @Req() req,
  ) {
    const authToken = req.cookies?.auth_token;
    if (!authToken || !this.adminService.isAdminUser(authToken)) {
      throw new UnauthorizedException('وارد حساب کاربری خود شوید');
    }
    return this.showCaseService.updateShowCase(id, updateShowCaseDto);
  }
}
