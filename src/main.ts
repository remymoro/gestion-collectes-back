import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/exceptions/all-exceptions.filter';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cookie parser obligatoire pour csurf
  app.use(cookieParser());

  // Active le CORS pour Angular (localhost:4200)
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Gestion Collectes API')
    .setDescription('API pour la gestion des collectes alimentaires')
    .setVersion('1.0')
    .addBearerAuth() // Pour JWT
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Ajoute le filter global pour la gestion des erreurs
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
}
bootstrap();