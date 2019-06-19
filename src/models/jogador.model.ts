import { BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";

@Entity()
export class Jogador extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dataregistro: Date;

  @UpdateDateColumn()
  atualizadoem: Date;

  @Column()
  nome: string;

  @Column( "int" )
  idade: number;

  @Column( "int" )
  acertos: number;

  @Column( "int" )
  perguntas: number;
}
