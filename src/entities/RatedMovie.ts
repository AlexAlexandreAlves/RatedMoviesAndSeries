import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
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

    @ManyToOne(() => User, (user) => user.ratedMovies)
    @JoinColumn({name: 'user_id'})
    user: User;
  
    @ManyToOne(() => Movies, (movie) => movie.ratings)
    @JoinColumn({name: 'movie_id'})
    movie: Movies;

}
