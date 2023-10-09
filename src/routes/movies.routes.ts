import { Router } from 'express'
import { MoviesService } from '../services/movies-service'

const routes = Router()

routes.post('/movies', new MoviesService().create)
routes.get('/movies', new MoviesService().getList)
routes.get('/movies/:id', new MoviesService().getOne)

export default routes