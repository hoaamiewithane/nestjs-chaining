import configuration from '@/config'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AuthModule } from '@/auth/auth.module'
import { UserModule } from '@/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => configuration]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql']
    }),
    UserModule,
    AuthModule
  ],
  controllers: []
})
export class AppModule {}
