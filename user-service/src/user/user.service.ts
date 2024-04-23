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
    return await this.userRepository.findOneBy({ email })
  }

  async signUp(data: ISignupPayload) {
    const { email, password } = data
    const user = await this.findByEmail(email)
    if (user) {
      return false
    }
    data.password = await bcrypt.hash(password, 10)
    await this.userRepository.save(data)
    return true
  }
}
