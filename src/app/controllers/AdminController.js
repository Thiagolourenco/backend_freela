import Admin from "../models/Admin";
import sharp from "sharp";
import { resolve } from "path";
import fs from "fs";

class AdminController {
  // Listar todos os usuários cadastrados

  async index(req, res) {
    const usersAdmin = await Admin.find();

    return res.json(usersAdmin);
  }

  // criar um  novo usuário

  async store(req, res) {
    const {
      name,
      email,
      description,
      country,
      sports,
      rating,
      link,
    } = req.body;
    const { filename: file, location: urls = "" } = req.file;

    const adminStore = await Admin.create({
      name,
      email,
      description,
      country,
      sports,
      rating,
      link,
      urls,
    });

    return res.json(adminStore);
  }

  // Realiza uma filtragem pelo nome do usuário

  async show(req, res) {
    const userAdmins = await Admin.findOne({ _id: req.params.id });

    console.log(userAdmins);
    return res.json(userAdmins);
  }

  async update(req, res) {
    const { rating, valoricienes, media } = req.body;

    const obj = {
      rating,
      valoricienes,
      media,
    };

    console.log("OBJ =>", obj);

    //  const response = await Admin.updateOne({ _id: req.params.id }, { $set: obj });
    const response = await Admin.findByIdAndUpdate(
      { _id: req.params.id },
      { obj },
      { new: true }
    );
    console.log("RESPONSE", response);
    return res.json({ message: "Atualizado com sucesso" });
  }
}

export default new AdminController();
