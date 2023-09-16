import Joi from "joi"
import { Task } from "@/protocols/typeTask"

export const taskSchema = Joi.object<Task>({
  name: Joi.string()
    .max(255)
    .required()
    .messages({
      'string.max': 'O nome não pode ter mais de {#limit} caracteres',
      'any.required': 'O nome é obrigatório',
    }),

  description: Joi.string()
    .max(400)
    .required()
    .messages({
      'string.max': 'A descrição não pode ter mais de {#limit} caracteres',
      'any.required': 'A descrição é obrigatória',
    }),

  day: Joi.string()
    .pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/))
    .required()
    .messages({
      'string.pattern.base': 'A data deve estar no formato DD-MM-AAAA',
      'any.required': 'A data é obrigatória',
    }),

  responsible: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.max': 'O responsável não pode ter mais de {#limit} caracteres',
      'any.required': 'O responsável é obrigatório',
    }),

  status: Joi.string()
    .max(8)
    .required()
    .messages({
      'string.max': 'O status não pode ter mais de {#limit} caracteres',
      'any.required': 'O status é obrigatório',
    }),
});

