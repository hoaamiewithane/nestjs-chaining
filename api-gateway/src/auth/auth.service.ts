import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@/graphql/type'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(user: User): { accessToken: string; refreshToken: string } {
    return {
      accessToken: this.jwtService.sign({ user: user.email }),
      refreshToken: this.jwtService.sign(
        { user: user.email },
        { expiresIn: '1h' }
      )
    }
  }
}
