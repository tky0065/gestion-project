// src/models/tache.model.ts
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Projet} from './projet.model';
import {Utilisateur} from './utilisateur.model';

@model()
export class Tache extends Entity {
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
  titre: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateDebut: string;

  @property({
    type: 'date',
    required: true,
  })
  dateFin: string;

  @property({
    type: 'string',
    required: true,
  })
  priorite: string;

  @property({
    type: 'string',
    required: true,
  })
  statut: string;

  @belongsTo(() => Projet)
  projetId: string;

  @belongsTo(() => Utilisateur)
  assigneId: string;

  constructor(data?: Partial<Tache>) {
    super(data);
  }
}
