import { Request, Response } from "express";
import { moviesRepository } from "../../repositories/movies-repository";

export class MoviesService {
    async create(req: Request, res: Response) {
        const { name, description, year, rated } = req.body

        if (!name) {
            res.status(400).json({ message: 'The field name is necessary' })
        }

        try {
            const newMovie = moviesRepository.create({
                name,
                description,
                year,
                rated
            })

            await moviesRepository.save(newMovie)
            return res.status(201).json(newMovie)

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}