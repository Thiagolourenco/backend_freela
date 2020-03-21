import { Router } from "express";
import multer from "multer";

// controllers

import UserController from "./app/controllers/UserController";
import AdminController from "./app/controllers/AdminController";
import CommentsController from "./app/controllers/CommentsController";
import FileController from "./app/controllers/FileController";

import multerConfig from "./config/multer";

const routes = new Router();

const uploads = multer(multerConfig);

routes.post("/users", UserController.store);

// admin

routes.post("/admin", AdminController.store);
routes.get("/admin", AdminController.index);
routes.get("/admin/:name", AdminController.show);

// upload image
routes.post("/files", uploads.single("**"), FileController.store);

// comments
routes.post("/comments", CommentsController.store);

export default routes;
