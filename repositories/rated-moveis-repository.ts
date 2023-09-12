import { AppDataSource } from "../src/data-source";
import { RatedMovie } from "../src/entities/RatedMovie";

export const ratedMovieRepository = AppDataSource.getRepository(RatedMovie)