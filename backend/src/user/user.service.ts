import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { IncorrectCredentialsException } from './exceptions/incorrectCredentials.exception';
import { UserNotFoundException } from './exceptions/userNotFound.exception';

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
  constructor(private userRepository: UserRepository) {}

  saltOrRounds = 10;

  //Creation d'un utilisateur
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.saltOrRounds,
    );
    return this.userRepository.create(createUserDto);
  }

  //Récupération de tout les utilisateurs
  findAll() {
    return this.userRepository.find({});
  }

  //Récupération d'un utilisateur
  findOne(id: string) {
    return this.userRepository.findOne({ _id: id });
  }

  //Modification d'un utilisateur
  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      email: loginUserDto.email,
    });

    //Verifier si l'utilisateur existe
    if (!user) {
      throw new UserNotFoundException();
    }
    //Verifier si l'utilisateur a entré un mot de passe correct
    const isPasswordCorrect = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new IncorrectCredentialsException();
    }
    //connexion réussie
    return {
      email: user.email,
      id: user._id,
      nom: user.nom,
      prenom: user.prenom,
    };
  }
}
