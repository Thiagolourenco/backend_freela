import { Router } from "express";
import multer from "multer";

// controllers

import UserController from "./app/controllers/UserController";
import AdminController from "./app/controllers/AdminController";
import CommentsController from "./app/controllers/CommentsController";
import FileController from "./app/controllers/FileController";
import LikeController from "./app/controllers/LikeController";

import RootController from "./app/controllers/RootController";

import multerConfig from "./config/multer";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

// admin

routes.post("/admin", upload.single("file"), AdminController.store);
routes.get("/admin", AdminController.index);
routes.get("/admin/:id", AdminController.show);
routes.put("/admin/:id", AdminController.update);

// ROOT
routes.get("/root", RootController.index);
routes.post("/root", upload.single("file"), RootController.store);
routes.get("/root/:id", RootController.show);
routes.put("/root/:id", RootController.update);

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
