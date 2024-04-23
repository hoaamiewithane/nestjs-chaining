import { Module } from '@nestjs/common'
import { ClientProxyFactory, Transport } from '@nestjs/microservices'
import { USERS_SERVICE } from '@/core/constants'

@Module({
  imports: [],
  providers: [
    {
      provide: USERS_SERVICE,
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: process.env.HOST,
            port: parseInt(process.env.USERS_SVC_PORT!)
          }
        })
      }
    }
  ],
  exports: [USERS_SERVICE]
})
export class UserModule {}
