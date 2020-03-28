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
    const { name, email, description, country, sports, stars } = req.body;
    const { filename: file } = req.file;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(resolve(req.file.destination, "resized", file));

    fs.unlinkSync(req.file.path);

    const adminStore = await Admin.create({
      name,
      email,
      description,
      country,
      sports,
      stars,
      file
    });

    return res.json(adminStore);
  }

  // Realiza uma filtragem pelo nome do usuário

  async show(req, res) {
    const userAdmins = await Admin.findOne({ name: req.params.name });

    return res.json(userAdmins);
  }
}

export default new AdminController();
