import { Request, Response } from "express";
import { ratedMovieRepository } from "../repositories/rated-moveis-repository";

export class RatedMovieSerice {
    async create(req: Request, res: Response) {
        const { rating, description, rated_movie, rated_user } = req.body

        if (!rating) {
            res.status(400).json({ message: 'The field rating is necessary' })
        }

        try {
            const newRatedMovie = ratedMovieRepository.create({
                rating,
                description,
                rated_movie,
                rated_user
            })

            await ratedMovieRepository.save(newRatedMovie)
            return res.status(201).json(newRatedMovie)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}