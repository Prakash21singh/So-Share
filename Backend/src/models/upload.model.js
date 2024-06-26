import mongoose, { mongo } from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    upload: {
      type: String,
    },
    filename: {
      type: String,
      default: "CoShareFile",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Upload = mongoose.model("Upload", uploadSchema);
