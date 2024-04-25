import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { AuthResolver } from './auth.resolver'
import { UserModule } from '@/user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '60s' }
      })
    }),

    forwardRef(() => UserModule)
  ],
  controllers: [],
  providers: [AuthService, AuthResolver],
  exports: [AuthService]
})
export class AuthModule {}
