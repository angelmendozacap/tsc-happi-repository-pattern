import { Server } from "@hapi/hapi";
import { userRoutes } from "./user";

export default (server: Server) => {
  userRoutes(server)
}
