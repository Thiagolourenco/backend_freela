import Admin from "../models/Admin";

class AdminController {
  // Listar todos os usuários cadastrados

  async index(req, res) {
    const usersAdmin = await Admin.find().populate("adminId");

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
      stars
    } = await Admin.create(req.body);

    return res.json({ name, email, description, country, sports, stars });
  }

  // Realiza uma filtragem pelo nome do usuário

  async show(req, res) {
    const userAdmins = await Admin.findOne({ name: req.params.name });

    return res.json(userAdmins);
  }
}

export default new AdminController();
