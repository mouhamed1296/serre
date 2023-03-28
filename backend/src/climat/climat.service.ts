import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClimatDto } from './dto/create-climat.dto';
import { Climat, ClimatDocument } from './entities/climat.entity';

@Injectable()
export class ClimatService {
  constructor(@InjectModel(Climat.name) private ClimatSchema: Model<ClimatDocument>) {}

  create(createClimatDto: CreateClimatDto) {
    const createdClimat = new this.ClimatSchema(createClimatDto);
    return createdClimat.save();
  }

  findAll() {
    return this.ClimatSchema.find().exec();
  }

  findOne(id: string) {
    return this.ClimatSchema.findById(id).exec();
  }

}
