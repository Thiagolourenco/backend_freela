import File from "../models/File";

class FileController {
  async index(req, res) {
    const files = await File.find();

    return res.json(files);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const id = req.params.id;

    const file = await File.create({
      name,
      path,
      fileId: id
    });

    return res.json(file);
  }
}

export default new FileController();
