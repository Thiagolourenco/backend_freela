import User from "../models/User";

class UserController {
  async index(req, res) {
    const users = await User.find();

    res.json(users);
  }
  // Salva os dados do usuário de acordo com o que é salvo pelo google
  async store(req, res) {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.json({ _id: userExists._id });
    }

    const response = await User.create(req.body);

    return res.json(response);
  }

  async show(req, res) {
    const response = await User.findOne({ _id: req.params.id });

    return res.json(response);
  }
}

export default new UserController();
