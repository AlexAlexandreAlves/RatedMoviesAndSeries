import { Router } from 'express'
import { MoviesService } from '../services/movies-service'

const routes = Router()

routes.get('/movies', new MoviesService().getList)
routes.get('/movies/:id', new MoviesService().getOne)
routes.post('/movies', new MoviesService().create)
routes.put('/movies/:id', new MoviesService().update)
routes.delete('/movies/:id', new MoviesService().delete)

export default routes