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

    async getOne(req: Request, res: Response) {
        const id = req.params

        try {
            const ratedMovie = await ratedMovieRepository.find(id);

            if (!ratedMovie) {
                return res.status(404).json({ message: 'Rated not found' });
            }

            return res.status(200).json(ratedMovie);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getList(req: Request, res: Response) {

        try {
            const ratedMovie = await ratedMovieRepository.find();

            if (!ratedMovie) {
                return res.status(404).json({ message: 'Rated not found' });
            }

            return res.status(200).json(ratedMovie);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const id = req.params; 
        const body = req.body;

        try {
            const rating = await ratedMovieRepository.find(id);

            if (!rating) {
                return res.status(404).json({ message: 'Rating not found' });
            }

            if (body.rating) {
                rating[0].rating = body.rating;
            }
            if (body.description) {
                rating[0].description = body.description;
            }
    
            await ratedMovieRepository.save(rating);

            return res.status(200).json(rating);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params

        try {
            const rating = await ratedMovieRepository.delete(id);

            if (!rating) {
                return res.status(404).json({ message: 'Rating not found' });
            }

            return res.status(200).json(rating);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}