import { Request, Response } from "express";
import { ratedTvShowRepository } from "../repositories/rated-tvshow-repository";
import { tvShowsRepository } from "../repositories/tvshows-repository";
import { usersRepository } from "../repositories/user-repository";
import { RatedMovie } from "../entities/RatedMovie";
import { RatedTvShow } from "../entities/RatedTvShow";

export class RatedTvShowService {

    //TODO: Ajustar amanhã, as requisições só referenciam o mesmo id
    
    async create(req: Request, res: Response) {
        const { rating, description, tvShowId, userId } = req.body

        if (!rating) {
            res.status(400).json({ message: 'The field rating is necessary' })
        }

        let tvShow = await tvShowsRepository.findOneBy(tvShowId)
        let user = await usersRepository.findOneBy(userId)

        try {
            const newRatedTvShow = new RatedTvShow(rating, description, tvShow[0], user[0])
            console.log(tvShow)
            console.log(tvShowId)

            await ratedTvShowRepository.save(newRatedTvShow)
            return res.status(201).json(newRatedTvShow)

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getOne(req: Request, res: Response) {
        const id = req.params

        try {
            const ratedTvShow = await ratedTvShowRepository.find(id);

            if (!ratedTvShow) {
                return res.status(404).json({ message: 'rated not found' });
            }

            return res.status(200).json(ratedTvShow);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getList(req: Request, res: Response) {

        try {
            const ratedTvShow = await ratedTvShowRepository.find();

            if (!ratedTvShow) {
                return res.status(404).json({ message: 'rated not found' });
            }

            return res.status(200).json(ratedTvShow);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    
    async update(req: Request, res: Response) {
        const id = req.params; 
        const body = req.body;

        try {
            const rating = await ratedTvShowRepository.find(id);

            if (!rating) {
                return res.status(404).json({ message: 'Rating not found' });
            }

            if (body.rating) {
                rating[0].rating = body.rating;
            }
            if (body.description) {
                rating[0].description = body.description;
            }
    
            await ratedTvShowRepository.save(rating);

            return res.status(200).json(rating);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params

        try {
            const movie = await ratedTvShowRepository.delete(id);

            if (!movie) {
                return res.status(404).json({ message: 'Rating not found' });
            }

            return res.status(200).json(movie);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}