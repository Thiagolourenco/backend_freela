import { Schema, model } from "mongoose";

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    sports: {
      type: String,
      required: true
    },
    stars: {
      type: String,
      required: true,
      default: 0
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "commentsschemas"
      }
    ]
  },
  { timestamps: true }
);

export default model("AdminSchema", AdminSchema);
