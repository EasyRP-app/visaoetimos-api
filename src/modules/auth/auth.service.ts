import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/users.service';

import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthInput } from './dto/auth.input';
import { AuthType, TokenValidType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.getUserByEmail(data.email);
    const validPassword = compareSync(data.password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('senha Incorreta');
    }
    const token = await this.jwtToken(user);
    return {
      user,
      token,
    };
  }

  private async jwtToken(
    user: User,
    options?: JwtSignOptions,
  ): Promise<string> {
    const payload = { name: user.name, sub: user.id };
    return this.jwtService.sign(payload, options);
  }
  async validateToken(token: string): Promise<TokenValidType> {
    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });
    try {
      jwtService.verify(token);
      const tokenContent = jwtService.decode(token);
      const user: User = await this.userService.findById(tokenContent.sub);
      if (user) {
        return { valid: true };
      }
      return { valid: false };
    } catch (error) {
      return { valid: false };
    }
  }
}
