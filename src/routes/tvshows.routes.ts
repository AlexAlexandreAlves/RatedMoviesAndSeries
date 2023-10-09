import { Router } from 'express'
import { TvShowService } from '../services/tvshows-service'

const routes = Router()

routes.get('/tvshows', new TvShowService().getList)
routes.get('/tvshows/:id', new TvShowService().getOne)
routes.post('/tvshows', new TvShowService().create)

export default routes