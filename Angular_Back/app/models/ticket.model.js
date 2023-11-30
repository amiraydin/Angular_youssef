const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  title: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
  major: Joi.string().required(),
  archived: Joi.boolean().required(),
  studentId: Joi.string().required(),
  // studentSearch: ''
});
