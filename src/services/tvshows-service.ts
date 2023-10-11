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
                year
            })
            await tvShowsRepository.save(newTvShow)

            return res.status(201).json(newTvShow)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getOne(req: Request, res: Response) {
        const id = req.params

        try {
            const tvShow = await tvShowsRepository.find(id);

            if (!tvShow) {
                return res.status(404).json({ message: 'tvshow not found' });
            }

            return res.status(200).json(tvShow);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getList(req: Request, res: Response) {

        try {
            const tvShow = await tvShowsRepository.find();

            if (!tvShow) {
                return res.status(404).json({ message: 'tvshow not found' });
            }

            return res.status(200).json(tvShow);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const id = req.params;
        const body = req.body;

        try {
            const tvShow = await tvShowsRepository.find(id);

            if (!tvShow) {
                return res.status(404).json({ message: 'TvShow not found' });
            }

            if (body.name) {
                tvShow[0].name = body.name;
            }
            if (body.description) {
                tvShow[0].description = body.description;
            }
            if (body.year) {
                tvShow[0].year = body.year;
            }

            await tvShowsRepository.save(tvShow);

            return res.status(200).json(tvShow);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params

        try {
            const tvShow = await tvShowsRepository.delete(id);

            if (!tvShow) {
                return res.status(404).json({ message: 'TvShow not found' });
            }

            return res.status(200).json(tvShow);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}