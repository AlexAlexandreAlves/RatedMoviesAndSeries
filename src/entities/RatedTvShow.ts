import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToMany } from "typeorm"
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

    @ManyToMany(() => TvShows)
    @JoinColumn({ name: 'tvshow_id' })
    rated_tvshow: TvShows

    @ManyToMany(() => User)
    @JoinColumn({ name: 'user_id' })
    rated_user: User

}
