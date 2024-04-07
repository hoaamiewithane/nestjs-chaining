import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from '@/auth/auth.service'
import { Inject, OnModuleInit } from '@nestjs/common'
import { USERS_SERVICE } from '@/core/constants'
import { ClientGrpcProxy } from '@nestjs/microservices'
import { IUsersService } from '@/user/user.interface'
import { SignupUserInput } from '@/graphql/type'
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
    const res = await firstValueFrom(this.usersService.findByEmail(data))
    console.log('res', res)
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      user: res
    }
  }
}
