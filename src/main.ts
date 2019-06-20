import { setEnvironment } from './common/env.env_service';
setEnvironment();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './common/api.conf';


async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.enableCors();
  await app.listen( port );
}
bootstrap();
