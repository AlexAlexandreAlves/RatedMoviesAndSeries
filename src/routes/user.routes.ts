import { Router } from 'express'
import { UserService } from '../services/user-service'

const routes = Router()

routes.get('/user', new UserService().getList)
routes.get('/user/:id', new UserService().getOne)
routes.post('/user', new UserService().create)
routes.put('/user/:id', new UserService().update)
routes.delete('/user/:id', new UserService().delete)

export default routes