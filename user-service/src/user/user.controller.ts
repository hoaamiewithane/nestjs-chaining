import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { UserService } from '@/user/user.service'
import { ISignupPayload } from '@/user/user.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UsersService', 'FindByEmail')
  async findByEmail(payload: ISignupPayload) {
    return await this.userService.findByEmail(payload.email)
  }

  @GrpcMethod('UsersService', 'Signup')
  async signup(payload: ISignupPayload) {
    return await this.userService.signUp(payload)
  }
}
