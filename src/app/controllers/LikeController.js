import Comments from "../models/Comments";

class LikeController {
  // criar um  novo usuário

  async store(req, res) {
    console.log(req.io, req.connectedComments);
    const comment = await Comments.findById(req.params.id);

    comment.likes += 1;

    await comment.save();

    req.io.emit("like", comment);

    return res.json(comment);
  }
}

export default new LikeController();
