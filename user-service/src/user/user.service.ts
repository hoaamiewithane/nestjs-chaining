import { Injectable } from '@nestjs/common'
import { ISignupPayload } from '@/user/user.interface'
import { UserEntity } from '@/user/entities/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email }
    })
  }

  async signUp(data: ISignupPayload) {
    data.password = await bcrypt.hash(data.password, 10)
    console.log(data)

    return await this.userRepository.save(data)
  }
}
