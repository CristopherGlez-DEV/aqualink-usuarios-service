import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsDateString,
  Matches,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Zaragoza #3, Charco de Pantoja' })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({ example: 'juanperez@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '4561328259' })
  @Matches(/^[0-9]{10}$/, { message: 'El teléfono debe tener 10 dígitos numéricos' })
  telefono: string;

  @ApiProperty({ example: '2024-07-19', description: 'Fecha de alta del usuario' })
  @IsDateString({}, { message: 'La fechaAlta debe tener formato YYYY-MM-DD' })
  @IsOptional()
  fechaAlta?: string;
}
