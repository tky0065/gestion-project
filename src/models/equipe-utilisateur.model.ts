// src/models/equipe-utilisateur.model.ts
import {Entity, model, property} from '@loopback/repository';

@model()
export class EquipeUtilisateur extends Entity {
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
  equipeId: string;

  @property({
    type: 'string',
    required: true,
  })
  utilisateurId: string;

  @property({
    type: 'string',
    default: 'membre',
  })
  role?: string;

  constructor(data?: Partial<EquipeUtilisateur>) {
    super(data);
  }
}
