import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Movies } from "./Movies"
import { TvShows } from "./TvShow"

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

}

