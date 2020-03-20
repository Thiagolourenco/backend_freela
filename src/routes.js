import { Router } from "express";

import UserController from "./app/controllers/UserController";
import AdminController from "./app/controllers/AdminController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/admin", AdminController.store);
routes.get("/admin", AdminController.index);
routes.get("/admin/:name", AdminController.show);

export default routes;
