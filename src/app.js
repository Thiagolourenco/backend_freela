import express from "express";
import mongoose from "mongoose";
import { resolve } from "path";
import cors from "cors";

import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(
      "mongodb+srv://freela:freela@cluster0-4rfre.mongodb.net/freela?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "tmp", "uploads", "resized"))
    );
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
