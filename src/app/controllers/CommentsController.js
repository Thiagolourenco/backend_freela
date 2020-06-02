import Comments from "../models/Comments";
import Root from "../models/RootSchema";

function addGrade(avaliacao, stars) {
  const sum = avaliacao.sum + stars;
  const qtde = avaliacao.quantity + 1;

  const final = (sum / qtde) * 2;

  return {
    avaliacao: {
      sum: sum,
      quantity: qtde,
      rating: final,
    },
  };
}

function removeGrade(comment, avaliacao, stars) {
  const sum = avaliacao.sum - stars;
  const qtde = avaliacao.quantity - 1;

  const final = sum / qtde;

  return {
    avaliacao: {
      sum: sum,
      quantity: qtde,
      rating: final,
    },
  };
}

function updateGrade(avaliacao, oldStars, newStars) {
  const sum = avaliacao.sum - oldStars + newStars;
  const qtde = avaliacao.quantity;

  const final = sum / qtde;

  return {
    avaliacao: {
      sum: sum,
      quantity: qtde,
      rating: final,
    },
  };
}

class CommentsController {
  async index(req, res) {
    const comments = await Comments.find();

    return res.json(comments);
  }

  async store(req, res) {
    const comments = await Comments.create(req.body);
    const dataComment = new Date();

    let rootTeste;
    if (comments != null) {
      try {
        rootTeste = await Root.findById({ _id: req.body.admincomment });
      } catch (erro) {
        console.log(" erRO", erro);
      }

      if (rootTeste != null) {
        const newComment = addGrade(rootTeste.avaliacao, req.body.rating);

        await Root.updateOne(
          { _id: req.body.admincomment },
          { $set: newComment }
        );

        console.log("UPDATE SUCCESS");
      }
    }

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
