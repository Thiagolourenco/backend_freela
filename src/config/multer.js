import multer from "multer";
import crypto from "crypto";
import { extname, resolve } from "path";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

// const storageS3 = new aws.S3({
//   accessKeyId: "AKIA3TUCC7F3DYGJB5XE",
//   secretAccessKey: "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",
// });

const storageTypes = {
  local: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: "tipsterprime",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
};

export default {
  storage: multerS3({
    s3: new aws.S3(),
    bucket: "uploadfreela",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
};
