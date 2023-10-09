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
    
    //TODO: Ajustar essa req
    async update(req: Request, res: Response) {
        const id = req.params; 
        const { name, description, year } = req.body;

        try {
            const existingMovie = await moviesRepository.findOne(id);

            if (!existingMovie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            const updateFields = {
                name,
                description,
                year,
            };

            
            Object.keys(updateFields).forEach((field) => {
                if (updateFields[field] !== undefined) {
                    existingMovie[field] = updateFields[field];
                }
            });
            
            await moviesRepository.save(existingMovie);
            
            return res.status(200).json(existingMovie);

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}