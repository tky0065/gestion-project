import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import { Tache } from './tache.model';
import { Equipe } from './equipe.model';
import { Utilisateur } from './utilisateur.model';
import { ProjetUtilisateur } from './projet-utilisateur.model';

@model()
export class Projet extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

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
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  budget: number;

  @hasMany(() => Tache)
  taches: Tache[];

  @belongsTo(() => Equipe)
  equipeId: string;

  @hasMany(() => Utilisateur, {through: {model: () => ProjetUtilisateur}})
  utilisateurs: Utilisateur[];
  constructor(data?: Partial<Projet>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here

}

export type ProjectWithRelations = Projet & ProjectRelations;
