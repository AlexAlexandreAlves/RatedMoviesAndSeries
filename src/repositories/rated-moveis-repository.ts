import { AppDataSource } from "../data-source";
import { RatedMovie } from "../entities/RatedMovie";

export const ratedMovieRepository = AppDataSource.getRepository(RatedMovie)