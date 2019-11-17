const mongoose = require("mongoose");

const Instruction = new mongoose.Schema(
  {
    instruction: String
  },
  {
    timestamps: false
  }
);

module.exports = mongoose.model("Instruction", Instruction);
