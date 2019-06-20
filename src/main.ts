import { setEnvironment } from './common/env.env_service';
setEnvironment();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port, env } from './common/api.conf';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const pacote = require( '../package.json' ); // dados do projeto


async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.enableCors();

  let options; // seleciona o schema http fora de prod e https em prod
  if ( env == 'production' ) {
    options = new DocumentBuilder()
      .setTitle( 'Projeto Integrador 4' )
      .setDescription( pacote.description )
      .setVersion( pacote.version )
      .addTag( 'Documentação das rotas disponíveis na API' )
      .setSchemes( 'https', 'http' )
      .addBearerAuth()
      .build();
  } else {
    options = new DocumentBuilder()
      .setTitle( 'Projeto Integrador 4' )
      .setDescription( pacote.description )
      .setVersion( pacote.version )
      .addTag( 'Documentação das rotas disponíveis na API' )
      .setSchemes( 'http', 'https' )
      .addBearerAuth()
      .build();
  }
  const document = SwaggerModule.createDocument( app, options );
  SwaggerModule.setup( 'docs', app, document );
  await app.listen( port );
  console.log( `API pronta e ouvindo na porta ${port}` );
}

bootstrap();
