// src/services/auth.service.ts
import {UserService} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {compare} from 'bcryptjs';
import {Utilisateur} from '../models';
import {UtilisateurRepository} from '../repositories';

export class AuthService implements UserService<Utilisateur, Credentials> {
  constructor(
    @repository(UtilisateurRepository)
    public utilisateurRepository: UtilisateurRepository,
  ) {
  }

  async verifyCredentials(credentials: Credentials): Promise<Utilisateur> {
    const invalidCredentialsError = 'Email ou mot de passe invalide.';

    const foundUser = await this.utilisateurRepository.findOne({
      where: {email: credentials.email},
    });

    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    const passwordMatched = await compare(
      credentials.motDePasse,
      foundUser.motDePasse,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  convertToUserProfile(user: Utilisateur): UserProfile {
    return {
      [securityId]: user.id.toString(),
      id: user.id,
      email: user.email,
      nom: user.nom,
      role: user.role,
      permissions: user.permissions,
    };
  }
}

export interface Credentials {
  email: string;
  motDePasse: string;
}
