import Comments from "../models/Comments";
import Admin from "../models/Admin";

class CommentsController {
  async index(req, res) {
    const comments = await Comments.find();

    return res.json(comments);
  }

  async store(req, res) {
    const comments = await Comments.create(req.body);
    const dataComment = new Date();

    console.log("Data Comment", dataComment);

    req.io.emit("comment", comments);

    return res.json(comments);
  }

  async show(req, res) {
    const comments = await Comments.find({ admincomment: req.params.id });
    // const adminId = await Admin.find();

    return res.json(comments);
  }
}

export default new CommentsController();
