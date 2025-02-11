import {Entity, belongsTo, model, property} from '@loopback/repository';
import { Tache } from './tache.model';
import { Utilisateur } from './utilisateur.model';

@model()
export class Commentaire extends Entity {
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
  contenu: string;

  @property({
    type: 'date',
    required: true,
  })
  dateCreation: string;

  @belongsTo(() => Tache)
  tacheId: string;

  @belongsTo(() => Utilisateur)
  auteurId: string;
  constructor(data?: Partial<Commentaire>) {
    super(data);
  }
}

export interface CommentaireRelations {
  // describe navigational properties here
}

export type CommentaireWithRelations = Commentaire & CommentaireRelations;
