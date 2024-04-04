import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@/graphql/type'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(user: User): Promise<string> {
    return this.jwtService.sign({ user: user.id })
  }

  async generateRefreshToken(user: User): Promise<string> {
    return this.jwtService.sign({ user: user.id }, { expiresIn: '1h' })
  }
}
