import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity('movies')
export class Movies {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    year: string

    @Column()
    description: string

    @Column()
    rated: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
