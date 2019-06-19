import { Injectable } from '@nestjs/common';
import { Jogador } from './models/jogador.model';
import { JogadorDto } from './models/jogador.dto';
import { createQueryBuilder } from 'typeorm';

@Injectable()
export class AppService {

  async getRank (): Promise<Jogador[]> {
    let listaRanqueada = await createQueryBuilder( "jogador" )
      .orderBy( `acertos`, "DESC" ).limit( 3 ).execute();
    return listaRanqueada;
  }

  async salvaJogo ( jogo: JogadorDto ) {

    let jogador: Jogador = new Jogador();
    jogador.idade = jogo.idade;
    jogador.nome = jogo.nome;
    jogador.perguntas = jogo.perguntas;
    jogador.acertos = jogo.acertos;
    return await Jogador.insert( jogador );
  }

}
