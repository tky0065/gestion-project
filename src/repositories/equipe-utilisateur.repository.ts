// src/repositories/equipe-utilisateur.repository.ts
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {EquipeUtilisateur} from '../models';

export class EquipeUtilisateurRepository extends DefaultCrudRepository<
  EquipeUtilisateur,
  typeof EquipeUtilisateur.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EquipeUtilisateur, dataSource);
  }
}
