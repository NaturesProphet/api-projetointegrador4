import { setEnvironment } from '../common/env.env_service';
setEnvironment();

import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { getConnection } from 'typeorm';
import { JogadorDto } from 'src/models/jogador.dto';

describe( 'AppController (e2e)', () => {
  let app;

  beforeEach( async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule( {
      imports: [ AppModule ],
    } ).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  } );

  afterEach( async () => {
    if ( module ) {
      await getConnection().synchronize( true );
      app.close();
    }
  } );




  it( 'endpoint raiz / (GET) deve responder com um array de Jogadores com até 10 posições', async () => {
    let response = await request( app.getHttpServer() ).get( '/' );
    expect( response.status ).toBe( 200 );
    expect( response.body.length ).toBeLessThan( 5 );
  } );


  it( 'endpoint /all (GET) deve responder com um array com todos os jogos feitos', async () => {
    let response = await request( app.getHttpServer() ).get( '/all' );
    expect( response.status ).toBe( 200 );
    expect( response.body.length ).toBeGreaterThanOrEqual( 0 );
  } );


  it( 'endpoint raiz / (POST) com um objeto JogadorDto deve salvar ou atualizar um jogo', async () => {
    let jogadorTeste: JogadorDto = {
      perguntas: 30,
      acertos: 15,
      nome: 'Testador',
      idade: 69
    }
    let response = await request( app.getHttpServer() ).post( '/' ).send( jogadorTeste );
    expect( response.status ).toBeLessThan( 202 );
    expect( response.status ).toBeGreaterThan( 199 );
  } );






} );
