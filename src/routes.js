import { Router } from "express";
import multer from "multer";

// controllers

import UserController from "./app/controllers/UserController";
import AdminController from "./app/controllers/AdminController";
import CommentsController from "./app/controllers/CommentsController";
import FileController from "./app/controllers/FileController";
import LikeController from "./app/controllers/LikeController";

import multerConfig from "./config/multer";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);

// admin

routes.post("/admin", upload.single("file"), AdminController.store);
routes.get("/admin", AdminController.index);
routes.get("/admin/:name", AdminController.show);

// upload image
routes.post("/files/:id", FileController.store);
routes.get("/files", FileController.index);

// comments
routes.post("/comments", CommentsController.store);
routes.get("/comments", CommentsController.index);
routes.get("/comments/:id", CommentsController.show);

// likes
routes.post("/comments/:id/like", LikeController.store);

export default routes;
