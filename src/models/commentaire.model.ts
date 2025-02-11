// src/models/commentaire.model.ts
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Tache} from './tache.model';
import {Utilisateur} from './utilisateur.model';

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
    jsonSchema: {
      format: 'date-time',
    },
  })
  dateCreation: string;

  @belongsTo(() => Tache, {name: 'tache'})
  tacheId: string;

  @belongsTo(() => Utilisateur, {name: 'auteur'})
  auteurId: string;

  constructor(data?: Partial<Commentaire>) {
    super(data);
  }
}
