// src/models/equipe.model.ts
import {Entity, hasMany, model, property} from '@loopback/repository';
import {Projet} from './projet.model';
import {Utilisateur} from './utilisateur.model';
import {EquipeUtilisateur} from './equipe-utilisateur.model';

@model()
export class Equipe extends Entity {
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

  @hasMany(() => Projet)
  projets: Projet[];

  @hasMany(() => Utilisateur, {through: {model: () => EquipeUtilisateur}})
  membres: Utilisateur[];

  constructor(data?: Partial<Equipe>) {
    super(data);
  }
}
