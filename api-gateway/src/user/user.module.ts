import { Module } from '@nestjs/common'
import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices'
import { USERS_SERVICE } from '@/core/constants'

@Module({
  imports: [],
  providers: [
    {
      provide: USERS_SERVICE,
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: `${process.env.USERS_SVC_URL}`,
            package: 'user',
            protoPath: '../_proto/user.proto'
          }
        })
      }
    }
  ],
  exports: [USERS_SERVICE]
})
export class UserModule {}
