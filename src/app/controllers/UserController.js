import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(401).json({ message: "Usuário já existe" });
    }

    const { id, idToken, email, photoUrl, name } = await User.create(req.body);

    return res.json({
      id,
      idToken,
      email,
      photoUrl,
      name
    });
  }
}

export default new UserController();
