const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'A name is required.'],
    unique: true
  },
  provider: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'A provider is required.'],
    unique: true
  },
  url: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'A url is required.'],
    unique: true
  },
});

module.exports = mongoose.model("Resource", ResourceSchema);
