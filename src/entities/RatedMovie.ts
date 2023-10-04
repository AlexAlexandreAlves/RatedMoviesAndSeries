import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
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
    user: User;
  
    @ManyToOne(() => Movies, (movie) => movie.ratings)
    movie: Movies;

}
