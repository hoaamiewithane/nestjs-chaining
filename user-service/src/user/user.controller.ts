import { GET_USER, SIGN_IN, SIGN_UP } from '@/core/constant/event'
import { ISigninPayload, ISignupPayload } from '@/user/user.interface'
import { UserService } from '@/user/user.service'
import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: SIGN_UP })
  async signup(payload: ISignupPayload) {
    return await this.userService.signUp(payload)
  }

  @MessagePattern({ cmd: SIGN_IN })
  async signin(payload: ISigninPayload) {
    return await this.userService.signIn(payload)
  }

  @MessagePattern({ cmd: GET_USER })
  async getUser(email: string) {
    return await this.userService.findByEmail(email)
  }
}
