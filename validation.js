const Joi = require('joi');
const constants = require('./constants');

const username = Joi
  .string()
  .min(constants.MIN_USERNAME_LENGTH)
  .max(constants.MAX_USERNAME_LENGTH)
  .description('Unique user identifier.');

const password = Joi
  .string()
  .min(constants.MIN_PASSWORD_LENGTH)
  .max(constants.MAX_PASSWORD_LENGTH)
  .description('User plain text password.');

const email = Joi
  .string()
  .email()
  .description('User email.');

const network = Joi
  .string()
  .min(1)
  .max(100)
  .description('IRC network address.');

const channel = Joi
  .string()
  .min(1)
  .max(100)
  .description('IRC channel name.');

const epochTime = Joi
  .number()
  .integer()
  .min(1)
  .max(100)
  .description('Epoch/Unix time.');

const usernameRequired = username.required();
const passwordRequired = password.required();
const emailRequired = email.required();
const networkRequired = network.required();
const channelRequired = channel.required();
const epochTimeRequired = epochTime.required();

module.exports = {
  username,
  password,
  email,
  network,
  channel,
  epochTime,
  usernameRequired,
  passwordRequired,
  emailRequired,
  networkRequired,
  channelRequired,
  epochTimeRequired
}
