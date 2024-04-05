import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('profiles')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: true })
  firstName: string

  @Column({ type: String, nullable: true })
  lastName: string

  @Column({ type: String, nullable: true })
  address: string
}
