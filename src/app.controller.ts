import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JogadorDto } from './models/jogador.dto';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  async getRank () {
    return await this.appService.getRank();
  }

  @Post()
  async salvaJogo ( @Res() res, @Body() body: JogadorDto ) {
    res.status( 201 ).send( await this.appService.salvaJogo( body ) );
  }
}
