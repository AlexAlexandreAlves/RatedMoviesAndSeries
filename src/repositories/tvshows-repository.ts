import { AppDataSource } from "../data-source";
import { TvShows } from "../entities/TvShow";

export const tvShowsRepository = AppDataSource.getRepository(TvShows)