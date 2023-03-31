import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClimatService } from './climat.service';
import { CreateClimatDto } from './dto/create-climat.dto';

@Controller('climat')
export class ClimatController {
  constructor(private readonly climatService: ClimatService) {}

  @Get('sensor')
  getSensorData() {
    return this.climatService.getSensorData();
  }
  
  @Post()
  create(@Body() createClimatDto: CreateClimatDto) {
    return this.climatService.create(createClimatDto);
  }

  @Get()
  findAll() {
    return this.climatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climatService.findOne(id);
  }

}
