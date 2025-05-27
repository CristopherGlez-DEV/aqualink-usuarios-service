import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ default: () => new Date().toISOString().split('T')[0] }) // formato YYYY-MM-DD
  fechaAlta: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
