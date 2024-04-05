import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller('user')
export class UserController {
  @GrpcMethod('UsersService', 'Find')
  async find(query: any) {
    return query
  }
}
