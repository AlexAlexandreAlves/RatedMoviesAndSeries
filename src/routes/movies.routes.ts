import { Router } from 'express'
import { MoviesService } from '../services/movies-service'

const routes = Router()

routes.post('/movies', new MoviesService().create)

export default routes