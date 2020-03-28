import express from "express";
import mongoose from "mongoose";
import { resolve } from "path";
import cors from "cors";
import io from "socket.io";
import http from "http";

import routes from "./routes";

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    this.database();
    this.middlewares();
    this.routes();
    this.sokcet();

    this.connectedComments = {};
  }

  sokcet() {
    this.io = io(this.server);

    // this.io.on('')
    this.io.on("connection", socket => {
      const { comment } = socket.handshake.query;

      this.connectedComments[comment] = socket.id;
    });
  }

  database() {
    mongoose.connect(
      "mongodb+srv://freela:freela@cluster0-4rfre.mongodb.net/freela?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/files",
      express.static(resolve(__dirname, "..", "uploads", "resized"))
    );
    this.app.use(cors());
    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedComments = this.connectedComments;

      next();
    });
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
