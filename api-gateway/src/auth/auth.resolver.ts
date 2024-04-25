import { AuthService } from '@/auth/auth.service'
import { USERS_SERVICE } from '@/core/constants'
import { SIGN_UP } from '@/core/constants/event'
import { SignupUserInput, User } from '@/graphql/type'
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
    const user = await firstValueFrom(
      this.usersService.send<User | null>({ cmd: SIGN_UP }, data)
    )
    if (!user) throw new Error('User already exists')
    return this.authService.generateToken(user)
  }
}
