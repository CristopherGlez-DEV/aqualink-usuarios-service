import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Usuario } from './schemas/usuario.schema';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'El usuario fue creado exitosamente', type: Usuario })
  async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
    return this.usuariosService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }
}
