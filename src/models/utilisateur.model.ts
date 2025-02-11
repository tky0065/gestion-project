// src/models/utilisateur.model.ts
import {Entity, hasMany, model, property} from '@loopback/repository';
import {Projet} from './projet.model';
import {ProjetUtilisateur} from './projet-utilisateur.model';
import {Equipe} from './equipe.model';
import {EquipeUtilisateur} from './equipe-utilisateur.model';

@model({
  settings: {
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class Utilisateur extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
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

  @property({
    type: 'array',
    itemType: 'string',
    default: ['utilisateur'],
  })
  permissions: string[];

  @hasMany(() => Projet, {through: {model: () => ProjetUtilisateur}})
  projets: Projet[];

  @hasMany(() => Equipe, {through: {model: () => EquipeUtilisateur}})
  equipes: Equipe[];

  constructor(data?: Partial<Utilisateur>) {
    super(data);
  }
}
