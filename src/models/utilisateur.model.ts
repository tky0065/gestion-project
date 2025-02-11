import {Entity, hasMany, model, property} from '@loopback/repository';
import { Projet } from './projet.model';
import { Commentaire } from './commentaire.model';
import { ProjetUtilisateur } from './projet-utilisateur.model';

@model()
export class Utilisateur extends Entity {
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
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: true,
  })
  motDePasse: string;

  @hasMany(() => Projet, {through: {model: () => ProjetUtilisateur}})
  projets: Projet[];

  @hasMany(() => Commentaire)
  commentaires: Commentaire[];

  constructor(data?: Partial<Utilisateur>) {
    super(data);
  }

}

export interface UtilisateurRelations {
  // describe navigational properties here
}

export type UtilisateurWithRelations = Utilisateur & UtilisateurRelations;
