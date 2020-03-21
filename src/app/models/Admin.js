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
      default: 0
    },
    filesname: {
      type: String
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "CommentsSchema"
      }
    ]
  },
  { timestamps: true }
);

AdminSchema.virtual("url").get(function() {
  const url = process.env.URL || "http://localhost:3333";
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

export default model("AdminSchema", AdminSchema);
