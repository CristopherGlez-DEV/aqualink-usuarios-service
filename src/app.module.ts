import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <- ¡Esto debe ir primero!
    MongooseModule.forRoot(process.env.MONGO_URI || ''), UsuariosModule, // <- Ahora sí puede leer la variable
  ],
})
export class AppModule {}
