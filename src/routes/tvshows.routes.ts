import { Router } from 'express'
import { TvShowService } from '../services/tvshows-service'

const routes = Router()

routes.get('/tvshows', new TvShowService().getList)
routes.get('/tvshows/:id', new TvShowService().getOne)
routes.post('/tvshows', new TvShowService().create)
routes.put('/tvshows/:id', new TvShowService().update)
routes.delete('/tvshows/:id', new TvShowService().delete)

export default routes