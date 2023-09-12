import { AppDataSource } from "../src/data-source";
import { TvShows } from "../src/entities/TvShow";

export const tvShowsRepository = AppDataSource.getRepository(TvShows)