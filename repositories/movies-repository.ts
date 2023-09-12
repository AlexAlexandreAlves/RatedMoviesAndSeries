import { AppDataSource } from "../src/data-source";
import { Movies } from "../src/entities/Movies";

export const moviesRepository = AppDataSource.getRepository(Movies)