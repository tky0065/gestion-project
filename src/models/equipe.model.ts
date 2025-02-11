import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipe extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Equipe>) {
    super(data);
  }
}

export interface EquipeRelations {
  // describe navigational properties here
}

export type EquipeWithRelations = Equipe & EquipeRelations;
