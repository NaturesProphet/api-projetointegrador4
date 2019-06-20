import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JogadorDto } from './models/jogador.dto';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiUseTags( 'Quiz' )
@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  @ApiOperation( { title: 'Consulta o top 4 no rank de jogos' } )
  @ApiResponse( {
    status: 200,
    description: 'Consulta realizada sem erros',
  } )
  async getRank () {
    return await this.appService.getRank();
  }

  @ApiOperation( { title: 'Consulta todos os jogos registrados' } )
  @ApiResponse( {
    status: 200,
    description: 'Consulta realizada sem erros',
  } )
  @Get( "/all" )
  async getAllGames () {
    return await this.appService.getAllGames();
  }

  @ApiOperation( { title: 'Salva o resultado de um novo jogo' } )
  @ApiResponse( {
    status: 201,
    description: 'Jogo salvo com sucesso',
  } )
  @Post()
  async salvaJogo ( @Res() res, @Body() body: JogadorDto ) {
    res.status( 201 ).send( await this.appService.salvaJogo( body ) );
  }
}
