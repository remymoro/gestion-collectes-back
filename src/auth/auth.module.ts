import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from 'src/common/guards/jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY', // À remplacer par une variable d'env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService,JwtStrategy ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}