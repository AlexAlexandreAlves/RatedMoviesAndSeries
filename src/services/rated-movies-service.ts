import { Request, Response } from "express";
import { ratedMovieRepository } from "../repositories/rated-moveis-repository";
import { moviesRepository } from "../repositories/movies-repository";
import { usersRepository } from "../repositories/user-repository";
import { RatedMovie } from "../entities/RatedMovie";

export class RatedMovieService {
    async create(req: Request, res: Response) {
        const { rating, description, movieId, userId } = req.body

        if (!rating) {
            res.status(400).json({ message: 'The field rating is necessary' })
        }

        let movie = await moviesRepository.findOneBy(movieId)
        let user = await usersRepository.findOneBy(userId)

        try {
            const newRatedMovie = new RatedMovie(rating, description, movie, user)
        
            await ratedMovieRepository.save(newRatedMovie)
            return res.status(201).json(newRatedMovie)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}