import { Request, Response } from "express";
import { moviesRepository } from "../repositories/movies-repository";

export class MoviesService {

    async create(req: Request, res: Response) {
        const { name, description, year } = req.body

        if (!name) {
            res.status(400).json({ message: 'The field name is necessary' })
        }

        try {
            const newMovie = moviesRepository.create({
                name,
                description,
                year
            })

            await moviesRepository.save(newMovie)
            return res.status(201).json(newMovie)

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getOne(req: Request, res: Response) {
        const id = req.params

        try {
            const movie = await moviesRepository.find(id);

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getList(req: Request, res: Response) {

        try {
            const movie = await moviesRepository.find();

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const id = req.params; 
        const body = req.body;

        try {
            const movie = await moviesRepository.find(id);

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            if (body.name) {
                movie[0].name = body.name;
            }
            if (body.description) {
                movie[0].description = body.description;
            }
            if (body.year) {
                movie[0].year = body.year;
            }

            await moviesRepository.save(movie);

            return res.status(200).json(movie);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params

        try {
            const movie = await moviesRepository.delete(id);

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            return res.status(200).json(movie);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}