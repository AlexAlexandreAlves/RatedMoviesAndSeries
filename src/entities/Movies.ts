import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

// interface IMovie {
//     name: string,
//     year: string,
//     description: string
// }

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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    ratings: any

    // constructor({ name, year, description }: IMovie) {
    //     this.name = name,
    //     this.year = year,
    //     this.description = description
    // }
}
