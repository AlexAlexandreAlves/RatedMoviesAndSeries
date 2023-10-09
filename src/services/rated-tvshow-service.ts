import { Request, Response } from "express";
import { ratedTvShowRepository } from "../repositories/rated-tvshow-repository";
import { tvShowsRepository } from "../repositories/tvshows-repository";
import { usersRepository } from "../repositories/user-repository";
import { RatedMovie } from "../entities/RatedMovie";
import { RatedTvShow } from "../entities/RatedTvShow";

export class RatedTvShowService {
    async create(req: Request, res: Response) {
        const { rating, description, tvShowId, userId } = req.body

        if (!rating) {
            res.status(400).json({ message: 'The field rating is necessary' })
        }

        let tvShow = await tvShowsRepository.findOneBy(tvShowId)
        let user = await usersRepository.findOneBy(userId)

        try {
            const newRatedTvShow = new RatedTvShow(rating, description, tvShow, user)

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
}