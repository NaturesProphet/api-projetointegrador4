import { Controller, Get, Post, Res, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Jogador } from './models/jogador.model';
import { JogadorDto } from './models/jogador.dto';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  async getHello () {
    return await this.appService.getRank();
  }

  @Post()
  async salvaJogo ( @Res() res, @Body() body: JogadorDto, @Req() req ) {
    res.status( 200 ).send();
  }
}
