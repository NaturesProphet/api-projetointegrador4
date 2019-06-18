import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { porta } from './common/api.conf';

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  await app.listen( porta );
}
bootstrap();
