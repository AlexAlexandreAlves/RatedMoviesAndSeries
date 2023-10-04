import { Router } from 'express'
import { UserService } from '../services/user-service'

const routes = Router()

routes.post('/user', new UserService().create)

export default routes