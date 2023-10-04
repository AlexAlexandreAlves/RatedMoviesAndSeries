import { Router } from 'express'
import { RatedMovieService } from '../services/rated-movies-service'

const routes = Router()

routes.post('/ratedMovie', new RatedMovieService().create)
routes.post('/ratedMovie/:idMovie/create', new RatedMovieService().create)

export default routes