import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

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

    //TODO: Remover esta coluna
    @Column()
    rated: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    ratings: any

}
