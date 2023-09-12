import { AppDataSource } from "../data-source";
import { RatedTvShow } from "../entities/RatedTvShow";

export const ratedTvShowRepository = AppDataSource.getRepository(RatedTvShow)