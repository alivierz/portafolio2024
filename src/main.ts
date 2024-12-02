import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function frontApp() {
  const app = await NestFactory.create(AppModule);

  //? no recuerdo
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new HttpException(
          {
            errorData: {
              type: 'format',
              data: validationErrors[0],
            },
          },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );

  //? creamos la estructura de swagger
  const config = new DocumentBuilder()
    .setTitle('Portfolio Example')
    .setDescription('Servicios publicos relacionados al backend de Alivier')
    .setVersion('0.0.2')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

frontApp();
