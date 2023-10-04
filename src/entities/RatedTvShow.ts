import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
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
    @JoinColumn({name: 'user_id'})
    user: User;
  
    @ManyToOne(() => TvShows, (tvShow) => tvShow.ratings)
    @JoinColumn({name: 'tvshow_id'})
    tvShow: TvShows;

}
