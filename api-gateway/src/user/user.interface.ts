import { SignupUserInput } from '@/graphql/type'
import { Observable } from 'rxjs'

export interface IUsersService {
  signup(data: SignupUserInput): Observable<boolean>
}
