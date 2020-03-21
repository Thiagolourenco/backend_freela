import Comments from "../models/Comments";

class CommentsController {
  async index() {}

  async store(req, res) {
    const comments = await Comments.create(req.body);

    return res.json(comments);
  }
}

export default new CommentsController();
