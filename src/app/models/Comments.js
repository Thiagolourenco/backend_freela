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
      default: 0
    },
    stars: {
      type: String,
      required: true,
      default: 0
    },
    admincomment: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model("CommentsSchema", CommentsSchema);
