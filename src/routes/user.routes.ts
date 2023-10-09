import { Router } from 'express'
import { UserService } from '../services/user-service'

const routes = Router()

routes.get('/user', new UserService().getList)
routes.get('/user/:id', new UserService().getOne)
routes.post('/user', new UserService().create)

export default routes