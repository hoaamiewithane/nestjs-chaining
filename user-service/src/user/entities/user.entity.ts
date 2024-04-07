import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  email: string

  @Column({ type: String })
  password: string
}
