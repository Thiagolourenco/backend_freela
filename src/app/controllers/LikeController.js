import Comments from "../models/Comments";

class LikeController {
  // criar um  novo usuário

  async store(req, res) {
    const comment = await Comments.findById(req.params.id);

    comment.likes += 1;

    await comment.save();

    return res.json(comment);
  }
}

export default new LikeController();
