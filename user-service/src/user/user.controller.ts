import { SIGN_UP } from '@/core/constant/event'
import { ISignupPayload } from '@/user/user.interface'
import { UserService } from '@/user/user.service'
import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: SIGN_UP })
  async signup(payload: ISignupPayload) {
    console.log('Received SIGN_UP event', payload)

    return await this.userService.signUp(payload)
  }
}
