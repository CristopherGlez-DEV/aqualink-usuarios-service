import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Usuario> {
    const createdUser = new this.usuarioModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Usuario[]> {
    const createdUser = await this.usuarioModel.find();
    return createdUser;
  }

  // Puedes agregar más funciones luego: findAll, update, delete, etc.
}
