import { Schema, model } from "mongoose";

const FileSchema = new Schema(
  {
    name: {
      type: String
    },
    path: {
      type: String
    },
    fileId: {
      type: String
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

FileSchema.virtual("url").get(function() {
  const url = process.env.URL || "http://localhost:3333";
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

export default model("FileSchema", FileSchema);
