import { Metadata } from '@grpc/grpc-js'
import { Observable } from 'rxjs'

export interface IUsersService {
  find(query: any, metadata?: Metadata): Observable<any>
}
