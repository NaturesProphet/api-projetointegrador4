import { Injectable } from '@nestjs/common';
import { Jogador } from './models/jogador.model';
import { JogadorDto } from './models/jogador.dto';

@Injectable()
export class AppService {

  async getRank (): Promise<Jogador[]> {
    return [ new Jogador() ];
  }

  async salvaJogo ( jogo: JogadorDto ) {
    return;
  }





}
