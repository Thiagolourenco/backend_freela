import File from "../models/File";

class FileController {
  async index() {}

  async store({ req, res }) {
    const user = await File.create(req.file);

    console.log(user);
  }
}

export default new FileController();
