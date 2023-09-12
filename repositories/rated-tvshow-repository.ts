import { AppDataSource } from "../src/data-source";
import { RatedTvShow } from "../src/entities/RatedTvShow";

export const ratedTvShowRepository = AppDataSource.getRepository(RatedTvShow)