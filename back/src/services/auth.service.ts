import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { CredentialsDto } from 'src/dto/credentials.dto';
import { AuthRepository } from 'src/repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async registerEmailAndPassword(body: CreateUserDto) {
    const { email, password, name, address, phone } = body;
    return await this.authRepository.registerEmailAndPassword(email, password, {
      name,
      address,
      phone,
    });
  }

  async login(body: CredentialsDto) {
    const { email, password } = body;
    return await this.authRepository.login(email, password);
  }

  async createToken(user) {
    return await this.authRepository.createJwtToken(user);
  }

  async googleLogin(req) {
    return await this.authRepository.googleLogin(req);
  }
}