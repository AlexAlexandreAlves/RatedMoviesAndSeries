import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, ManyToMany } from "typeorm"
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

    @ManyToMany(() => Movies)
    @JoinColumn({ name: 'movie_id' })
    rated_movie: Movies

    @ManyToMany(() => User)
    @JoinColumn({ name: 'user_id' })
    rated_user: User

}
