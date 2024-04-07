import { Observable } from 'rxjs'
import { SignupUserInput, User } from '@/graphql/type'

export interface IUsersService {
  findByEmail(email: Pick<SignupUserInput, 'email'>): Observable<User | null>

  signup(data: SignupUserInput): Observable<User>
}
