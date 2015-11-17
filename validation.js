const Joi = require('joi');

module.exports = {
  username: Joi.string().min(5).max(15).required(),
  password: Joi.string().min(8).max(1024).required(),
  network: Joi.string().min(1).max(100).required(),
  channel: Joi.string().min(1).max(100).required(),
  epochTime: Joi.number().integer().min(1).max(100).required()
}
