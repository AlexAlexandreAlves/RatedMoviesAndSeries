import { Router } from 'express'
import { RatedMovieService } from '../services/rated-movies-service'

const routes = Router()

routes.get('/ratedMovie', new RatedMovieService().getList)
routes.get('/ratedMovie/:id', new RatedMovieService().getOne)
routes.post('/ratedMovie', new RatedMovieService().create)
routes.put('/ratedMovie/:id', new RatedMovieService().update)
routes.delete('/ratedMovie/:id', new RatedMovieService().delete)

export default routes