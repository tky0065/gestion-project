import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import { Projet } from './projet.model';
import { Utilisateur } from './utilisateur.model';
import { Commentaire } from './commentaire.model';

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

@hasMany(() => Commentaire)
commentaires: Commentaire[];





  constructor(data?: Partial<Tache>) {
    super(data);
  }
}

export interface TacheRelations {
  // describe navigational properties here
}


export type TacheWithRelations = Tache & TacheRelations;
