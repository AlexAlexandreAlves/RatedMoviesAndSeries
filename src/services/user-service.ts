import { Request, Response } from "express";
import { usersRepository } from "../repositories/user-repository";

export class UserService {
    async create(req: Request, res: Response) {
        const { full_name, age, favorite_movie_gender } = req.body

        if (!full_name) {
            res.status(400).json({ message: 'The field full_name is necessary' })
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

    async getOne(req: Request, res: Response) {
        const id = req.params

        try {
            const user = await usersRepository.find(id);

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getList(req: Request, res: Response) {

        try {
            const user = await usersRepository.find();

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const id = req.params;
        const body = req.body;

        try {
            const user = await usersRepository.find(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (body.full_name) {
                user[0].full_name = body.full_name;
            }
            if (body.age) {
                user[0].age = body.age;
            }
            if (body.favorite_movie_gender) {
                user[0].favorite_movie_gender = body.favorite_movie_gender;
            }

            await usersRepository.save(user);

            return res.status(200).json(user);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params

        try {
            const user = await usersRepository.delete(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}