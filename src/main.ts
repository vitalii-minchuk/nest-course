import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1/');

  const config = new DocumentBuilder()
    .setTitle('nest course')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('mcmin4')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  });
}

start();
