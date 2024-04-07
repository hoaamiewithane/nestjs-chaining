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
    const foundedUser = await this.userRepository.findOneBy({ email })
    if (foundedUser) {
      throw new Error('Email already exists')
    }
  }

  async signUp(data: ISignupPayload) {
    const { email, password } = data
    await this.findByEmail(email)
    data.password = await bcrypt.hash(password, 10)
    return await this.userRepository.save(data)
  }
}
