import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@/graphql/type'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(user: User): Promise<string> {
    return this.jwtService.sign({ user: user.email })
  }

  async generateRefreshToken(user: User): Promise<string> {
    return this.jwtService.sign({ user: user.email }, { expiresIn: '1h' })
  }
}
