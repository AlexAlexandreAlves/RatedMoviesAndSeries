import { Request, Response } from "express";
import { tvShowsRepository } from "../repositories/tvshows-repository";

export class TvShowService {
    async create(req: Request, res: Response) {
        const { name, description, year, rated } = req.body

        if (!name) {
            res.status(400).json({ message: 'The field name is necessary' })
        }

        try {
            const newTvShow = tvShowsRepository.create({
                name,
                description,
                year,
                rated
            })
            await tvShowsRepository.save(newTvShow)
            
            return res.status(201).json(newTvShow)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}