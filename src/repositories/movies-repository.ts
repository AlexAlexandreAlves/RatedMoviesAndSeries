import { AppDataSource } from "../data-source";
import { Movies } from "../entities/Movies";

export const moviesRepository = AppDataSource.getRepository(Movies)