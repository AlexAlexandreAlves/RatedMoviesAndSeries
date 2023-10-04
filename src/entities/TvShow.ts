import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity('tv_shows')
export class TvShows {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    year: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    ratings: any

}
