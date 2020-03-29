import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    idToken: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    photoUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    admin: {
      type: String,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model("UserSchema", UserSchema);
