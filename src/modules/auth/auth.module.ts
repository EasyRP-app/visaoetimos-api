import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/users.service';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '20h' },
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, UserService, JwtStrategy],
})
export class AuthModule {}
