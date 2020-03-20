import Admin from "../models/Admin";

class AdminController {
  async index(req, res) {
    const usersAdmin = await Admin.find();

    return res.json(usersAdmin);
  }

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

  async show(req, res) {
    const userAdmins = await Admin.findOne({ name: req.params.name });

    return res.json(userAdmins);
  }
}

export default new AdminController();
