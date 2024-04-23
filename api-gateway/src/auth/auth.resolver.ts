import { AuthService } from '@/auth/auth.service'
import { USERS_SERVICE } from '@/core/constants'
import { SIGN_UP } from '@/core/constants/event'
import { SignupUserInput } from '@/graphql/type'
import { Inject } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'

@Resolver()
export class AuthResolver {
  constructor(
    @Inject(USERS_SERVICE)
    private readonly usersService: ClientProxy,
    private readonly authService: AuthService
  ) {}

  @Mutation()
  async signup(@Args('data') data: SignupUserInput) {
    const res = await firstValueFrom(
      this.usersService.send({ cmd: SIGN_UP }, data)
    )
    console.log('Received SIGN_UP event', res)

    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      user: res
    }
  }
}
