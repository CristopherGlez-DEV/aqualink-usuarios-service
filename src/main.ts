import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configuracion de Swagger
  const config = new DocumentBuilder()
    .setTitle('Aqualink Usuarios Service')
    .setDescription('API para gestionar usuarios en el sistema Aqualink')
    .setVersion('1.0')
    .addTag('usuarios')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // accedes desde http://localhost:{PORT}/api

  await app.listen(process.env.PORT);
}
bootstrap();
