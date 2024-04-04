import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller('user')
export class UserController {
  @GrpcMethod('UsersService', 'find')
  async find(query: any) {
    console.log('zo day', query)
    return {
      name: 'Hoa after qua service',
      email: 'NguyenDangHoaa@gmail.com',
      password: 'qwe1111',
      age: 1
    }
  }
}
