import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Movies } from "./Movies"
import { User } from "./User"

@Entity('rated_movies')
export class RatedMovie {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rating: number

    @Column()
    description: string

    @OneToOne(() => Movies)
    @JoinColumn({ name: 'movie_id' })
    rated_movie: Movies

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    rated_user: User

}
