import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: process.env.HOST,
      port: parseInt(process.env.PORT!),
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: `${process.env.HOST}:${process.env.GRPC_PORT}`,
      package: 'user',
      protoPath: '../_proto/user.proto',
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT!);
}

bootstrap().then(() => {
  console.log(`Application is running on: ${process.env.PORT}`);
});
