import { Request, Response } from "express";
import { usersRepository } from "../../repositories/user-repository";

export class UserService {
    async create(req: Request, res: Response) {
        const { full_name, age, favorite_movie_gender } = req.body

        if (!full_name) {
            res.status(400).json({ message: 'The field name is necessary' })
        }

        try {
            const newUser = usersRepository.create({
                full_name,
                age,
                favorite_movie_gender
            })

            await usersRepository.save(newUser)
            return res.status(201).json(newUser)

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}