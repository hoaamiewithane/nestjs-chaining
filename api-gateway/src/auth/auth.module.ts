import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import configuration from '@/config'
import { AuthResolver } from './auth.resolver'
import { UserModule } from '@/user/user.module'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configuration.jwtSecret,
      signOptions: { expiresIn: '60' }
    }),
    forwardRef(() => UserModule)
  ],
  controllers: [],
  providers: [AuthService, AuthResolver],
  exports: [AuthService]
})
export class AuthModule {}
