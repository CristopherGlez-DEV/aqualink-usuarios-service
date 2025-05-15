import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <- ¡Esto debe ir primero!
    MongooseModule.forRoot(process.env.MONGO_URI || ''), // <- Ahora sí puede leer la variable
  ],
})
export class AppModule {}
