import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { RatedMovie } from "./RatedMovie"
import { RatedTvShow } from "./RatedTvShow"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    full_name: string

    @Column()
    age: number

    @Column()
    favorite_movie_gender: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
    @OneToMany(() => RatedMovie, (ratedMovie) => ratedMovie.user)
    ratedMovies: RatedMovie[];
  
    @OneToMany(() => RatedTvShow, (ratedTVShow) => ratedTVShow.user)
    ratedTVShows: RatedTvShow[];

}

