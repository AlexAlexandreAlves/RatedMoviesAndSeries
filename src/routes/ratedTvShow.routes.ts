import { Router } from 'express'
import { RatedTvShowService } from '../services/rated-tvshow-service'

const routes = Router()

routes.post('/ratedTvShow', new RatedTvShowService().create)

export default routes