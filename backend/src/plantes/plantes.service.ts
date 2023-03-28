import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanteDto } from './dto/create-plante.dto';
import { UpdatePlanteDto } from './dto/update-plante.dto';
import { Plante, PlanteDocument } from './entities/plante.entity';

@Injectable()
export class PlantesService {
  constructor(
    @InjectModel(Plante.name) private PlanteModel: Model<PlanteDocument>){}
/*   create(createPlanteDto: CreatePlanteDto) {
    return 'This action adds a new plante';
  } */

    //Creation d'une plante
    create(CreatePlanteDto: CreatePlanteDto) {
      const newPlante = new this.PlanteModel(CreatePlanteDto);
      return newPlante.save();
    }
  //Récupération de tout les utilisateurs
  findAll() {
    return this.PlanteModel.find({});
  }

  findOne(id: string) {
    return this.PlanteModel.findOne({ _id: id }).exec();
  }

  update(id: string, UpdatePlanteDto: UpdatePlanteDto) {
    return this.PlanteModel.findOneAndUpdate({ _id: id }, UpdatePlanteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} plante`;
  }
}
