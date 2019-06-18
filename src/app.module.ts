import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as db from './common/database.conf';

@Module( {
  imports: [ TypeOrmModule.forRoot( {
    type: 'postgres',
    host: db.db_host,
    port: db.db_port,
    username: db.db_username,
    password: db.db_password,
    database: db.db_schema,
    entities: [ __dirname + '/**/*.model{.ts,.js}' ],
    synchronize: db.orm_sync
  } ) ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
