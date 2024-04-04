import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `${process.env.GRPC_HOST}:${process.env.PORT}`,
        package: 'user',
        protoPath: '../_proto/user.proto'
      }
    }
  )

  await app.listen()
}

bootstrap().then(() => {
  console.log(`Application is running on: ${process.env.PORT}`)
})
