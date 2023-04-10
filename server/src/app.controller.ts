import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ShortService } from './short/short.service';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateShortDto } from './dto';

@Controller()
export class AppController {
  constructor(private shortService: ShortService) {}

  @Get(':code')
  async redirect(@Res() res: Response, @Param('code') code: string) {
    const url = await this.shortService.getUrl(code);
    return res.redirect(url);
  }

  @Post()
  @UseGuards(ThrottlerGuard)
  async createShort(
    @Body() createShortDto: CreateShortDto,
    @Res() res: Response,
  ) {
    const code = await this.shortService.createShort(createShortDto.url);
    return res.status(201).json({ code });
  }
}
