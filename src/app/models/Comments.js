import { Schema, model } from "mongoose";

const CommentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    photoUrl: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    stars: {
      type: String,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export default model("CommentsSchema", CommentsSchema);
