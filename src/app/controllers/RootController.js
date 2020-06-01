import Root from "../models/RootSchema";

class RootController {
  async index(req, res) {
    const rootDados = await Root.find();

    return res.json(rootDados);
  }

  async store(req, res) {
    const {
      name,
      email,
      description,
      country,
      sports,
      stars,
      statistics,
      link,
    } = req.body;
    const { location: url } = req.file;

    const responseData = await Root.create({
      name,
      email,
      description,
      country,
      sports,
      stars,
      url,
      statistics,
      link,
    });

    return res.json(responseData);
  }

  async show(req, res) {
    const responseData = await Root.findOne({ _id: req.params.id });

    return res.json(responseData);
  }

  async update(req, res) {
    const { stars, media, valoricienes } = req.body;

    let obj = {
      stars,
      media,
      valoricienes,
    };
    const _id = req.parmas.id;
    // const teste = await Root.where({ _id: req.params.id });
    // const responseData = teste.update()

    const response = await Root.findByIdAndUpdate(_id, obj);
    console.log("REPONSE ", response);

    return res.json(responseData);
  }
}

export default new RootController();
