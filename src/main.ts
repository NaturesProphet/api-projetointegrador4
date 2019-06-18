import { setEnvironment } from './common/env.service';
setEnvironment();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './common/api.conf';


async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  await app.listen( port );
}
bootstrap();
