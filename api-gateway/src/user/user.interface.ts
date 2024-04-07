import { Observable } from 'rxjs'
import { SignupUserInput, User } from '@/graphql/type'

export interface IUsersService {
  findByEmail(email: Pick<SignupUserInput, 'email'>): any

  signup(data: SignupUserInput): Observable<User>
}
