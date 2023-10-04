import { Request, Response } from "express";
import { ratedTvShowRepository } from "../repositories/rated-tvshow-repository";

export class RatedTvShowService {
    async create(req: Request, res: Response) {
        const { rating, description, rated_tvshow, rated_user } = req.body

        if (!rating) {
            res.status(400).json({ message: 'The field rating is necessary' })
        }

        try {
            const rewRatedTvShow = ratedTvShowRepository.create({
                rating,
                description,
                // rated_tvshow,
                // rated_user
            })

            await ratedTvShowRepository.save(rewRatedTvShow)
            return res.status(201).json(rewRatedTvShow)

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}