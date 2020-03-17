const { Schema, model } = require('mongoose');

const clientSchema = new Schema (
{
    name: String,
    email: String,
    phone: Number,
    reason: String,
    message: String,
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Client', clientSchema);
