import { Schema, model } from "mongoose";

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    sports: {
      type: String,
      // required: true
    },
    rating: {
      type: Number,
      default: 0,
    },
    valoricienes: {
      type: String,
      default: 0,
    },
    media: {
      type: String,
      default: 0,
    },
    link: {
      type: String,
      default: "",
    },
    urls: {
      type: String,
    },
    names: {
      type: String,
    },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "commentsschemas"
    //   }
    // ]
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

AdminSchema.virtual("url").get(function () {
  const url = process.env.URL || "http://localhost:3333";
  return `${url}/admin/${encodeURIComponent(this.filesname)}`;
});

export default model("AdminSchema", AdminSchema);
