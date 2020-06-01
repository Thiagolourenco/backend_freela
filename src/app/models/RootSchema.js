import { Schema, model } from "mongoose";

const RootSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  sports: {
    type: String,
    required: false,
  },
  stars: {
    type: Number,
    required: false,
    default: 0,
  },
  media: {
    type: Number,
    required: false,
    default: 0,
  },
  valoricienes: {
    type: Number,
    required: false,
    default: 0,
  },
  avaliacao: {
    sum: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  url: {
    type: String,
    required: false,
  },
  statistics: {
    type: Boolean,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

export default model("rootSchema", RootSchema);
