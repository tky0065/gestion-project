import {Entity, model, property} from '@loopback/repository';

@model()
export class ProjetUtilisateur extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  projetId: string;

  @property({
    type: 'string',
    required: true,
  })
  utilisateurId: string;

  constructor(data?: Partial<ProjetUtilisateur>) {
    super(data);
  }
}
