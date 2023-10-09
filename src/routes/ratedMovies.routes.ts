import { Router } from 'express'
import { RatedMovieService } from '../services/rated-movies-service'

const routes = Router()

routes.get('/ratedMovie', new RatedMovieService().getList)
routes.get('/ratedMovie/:id', new RatedMovieService().getOne)
routes.post('/ratedMovie', new RatedMovieService().create)

export default routes