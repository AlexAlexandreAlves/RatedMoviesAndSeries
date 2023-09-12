import { AppDataSource } from "../src/data-source";
import { User } from "../src/entities/User";

export const usersRepository = AppDataSource.getRepository(User)