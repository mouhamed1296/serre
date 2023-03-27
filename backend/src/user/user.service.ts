import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

//Service pour les utilisateurs chargé de gérer les requêtes
//à la base de donnée
//Pour chaque requête on appelle la fonction correspondante dans le modèle
//et on retourne la réponse
//Exemple: la fonction create appelle la fonction save du modèle mongoose
//et retourne la réponse
@Injectable()
export class UserService {
  //Injection du modèle au niveau du constructeur de user service
  //la variable userModel ainsi créer nous permet de communiquer
  //avec la base de donnée
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    /* TODO */
  }

  //Creation d'un utilisateur
  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  //Récupération de tout les utilisateurs
  findAll() {
    return this.userModel.find({});
  }

  //Récupération d'un utilisateur
  findOne(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  //Modification d'un utilisateur
  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
