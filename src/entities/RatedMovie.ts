import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Movies } from "./Movies"
import { User } from "./User"


// type RatedMovieConstructorArgs = {
//     rating: number;
//     description: string;
//     user: User;
//     movie: Movies;
// };  

@Entity('rated_movies')
export class RatedMovie {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rating: number

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.ratedMovies)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Movies, (movie) => movie.ratings)
    @JoinColumn({ name: 'movie_id' })
    movie: Movies;

    constructor( rating, description, user, movie) {
        this.rating = rating,
        this.description = description,
        this.user = user
        this.movie = movie
    }
}
