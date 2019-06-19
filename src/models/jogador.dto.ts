import { ApiModelProperty } from "@nestjs/swagger";

export class JogadorDto {
  @ApiModelProperty()
  nome: string;

  @ApiModelProperty()
  idade: number;

  @ApiModelProperty()
  perguntas: number;

  @ApiModelProperty()
  acertos: number;
}
