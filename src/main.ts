import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function frontApp() {
  const app = await NestFactory.create(AppModule);

  //? no recuerdo
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //? creamos la estructura de swagger
  const config = new DocumentBuilder()
    .setTitle('Portfolio Example')
    .setDescription('Servicios publicos relacionados al backend de Alivier')
    .setVersion('0.0.1')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

frontApp();
