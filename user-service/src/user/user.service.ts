import { Injectable } from '@nestjs/common'
import { ISignupPayload } from '@/user/user.interface'
import { UserEntity } from '@/user/entities/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findByEmail(email: string) {
    const res = await this.userRepository.findOne({
      where: { email }
    })
    console.log({ res })
    return res
  }

  async signUp(data: ISignupPayload) {
    const { email, password } = data
    const user = await this.userRepository.findOne({
      where: { email }
    })
    if (user) {
      throw new Error('User already exists')
    }
  }
}
