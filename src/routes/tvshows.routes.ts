import { Router } from 'express'
import { TvShowService } from '../services/tvshows-service'

const routes = Router()

routes.post('/tvshows', new TvShowService().create)

export default routes