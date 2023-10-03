import { Router } from 'express'
import { MoviesService } from '../services/movies-service'
import { TvShowService } from '../services/tvshows-service'
import { UserService } from '../services/user-service'
import { RatedMovieService } from '../services/rated-movies-service'
import { RatedTvShowService } from '../services/rated-tvshow-service'

const routes = Router()

routes.post('/movies', new MoviesService().create)
routes.post('/tvshows', new TvShowService().create)
routes.post('/user', new UserService().create)
routes.post('/ratedMovie', new RatedMovieService().create)
routes.post('/ratedTvShow', new RatedTvShowService().create)

export default routes