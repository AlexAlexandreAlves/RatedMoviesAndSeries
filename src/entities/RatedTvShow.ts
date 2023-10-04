import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"
import { TvShows } from "./TvShow"

@Entity('rated_tvshow')
export class RatedTvShow {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rating: number

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.ratedTVShows)
    user: User;
  
    @ManyToOne(() => TvShows, (tvShow) => tvShow.ratings)
    tvShow: TvShows;

}
