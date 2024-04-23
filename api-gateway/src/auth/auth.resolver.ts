import { AuthService } from '@/auth/auth.service'
import { USERS_SERVICE } from '@/core/constants'
import { SignupUserInput } from '@/graphql/type'
import { IUsersService } from '@/user/user.interface'
import { Inject, OnModuleInit } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ClientGrpcProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'

@Resolver()
export class AuthResolver implements OnModuleInit {
  private usersService: IUsersService

  constructor(
    @Inject(USERS_SERVICE)
    private readonly usersServiceClient: ClientGrpcProxy,
    private readonly authService: AuthService
  ) {}

  onModuleInit() {
    this.usersService = this.usersServiceClient.getService(USERS_SERVICE)
  }

  @Mutation()
  async signup(@Args('data') data: SignupUserInput) {
    const res = await firstValueFrom(this.usersService.signup(data))
    console.log(res)

    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      user: res
    }
  }
}
