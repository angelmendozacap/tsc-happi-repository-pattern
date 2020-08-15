import { Server, ResponseToolkit, Request } from "@hapi/hapi"
import { UserController } from "../controllers/user.controller"

const userController = new UserController()

export const userRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/users',
    handler: (request: Request, h: ResponseToolkit) => userController.GetAll(request, h)
  })
}

