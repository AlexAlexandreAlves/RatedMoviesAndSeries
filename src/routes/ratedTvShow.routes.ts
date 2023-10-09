import { Router } from 'express'
import { RatedTvShowService } from '../services/rated-tvshow-service'

const routes = Router()

routes.get('/ratedTvShow', new RatedTvShowService().getList)
routes.get('/ratedTvShow/:id', new RatedTvShowService().getOne)
routes.post('/ratedTvShow', new RatedTvShowService().create)

export default routes