import { Schema, models, model } from "mongoose";

const userIdeaSchema = new Schema({
  websiteName: {
    type: String,
    required: [true, "Website name must be not empty."],
  },
  websiteDescription: {
    type: String,
    required: [true, "Website description must be not empty."],
  },
  target: {
    type: String,
    required: [true, "Target must be not empty."],
  },
  contents: {
    type: String,
    required: [true, "Contents must be not empty."],
  },
  createdAt: { type: Date, default: Date.now() },
});

export const UserIdea = models.UserIdea || model("UserIdea", userIdeaSchema);
