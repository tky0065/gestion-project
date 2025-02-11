// src/models/projet.model.ts
import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Tache} from './tache.model';
import {Utilisateur} from './utilisateur.model';
import {Equipe} from './equipe.model';
import {ProjetUtilisateur} from './projet-utilisateur.model';

@model()
export class Projet extends Entity {
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
  nom: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'date-time',
    },
  })
  dateDebut: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'date-time',
    },
  })
  dateFin: string;

  @property({
    type: 'string',
    required: true,
  })
  statut: string;

  @property({
    type: 'number',
  })
  budget?: number;

  @hasMany(() => Tache)
  taches: Tache[];

  @belongsTo(() => Equipe)
  equipeId: string;

  @hasMany(() => Utilisateur, {through: {model: () => ProjetUtilisateur}})
  membres: Utilisateur[];

  constructor(data?: Partial<Projet>) {
    super(data);
  }
}
