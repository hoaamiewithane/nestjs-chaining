import { AuthService } from '@/auth/auth.service'
import { USERS_SERVICE } from '@/core/constants'
import { GET_USER, GET_USERS, SIGN_IN, SIGN_UP } from '@/core/constants/event'
import { SigninUserInput, SignupUserInput, User } from '@/graphql/type'
import { Inject } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
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

  @Query()
  async signin(@Args('data') data: SigninUserInput) {
    const user = await firstValueFrom(
      this.usersService.send<User | null>({ cmd: SIGN_IN }, data)
    )

    if (!user) throw new Error('Email or password is incorrect')
    return this.authService.generateToken(user)
  }

  @Query()
  async user(@Args('email') email: string) {
    return await firstValueFrom(
      this.usersService.send<User[]>({ cmd: GET_USER }, email)
    )
  }

  @Query()
  async users() {
    return await firstValueFrom(
      this.usersService.send<User[]>({ cmd: GET_USERS }, {})
    )
  }
}
