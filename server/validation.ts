import Joi from "joi";

export const createGroupingSchema = Joi.object({
    name: Joi.string().required(),
    groups: Joi.array().items(Joi.array()).required()
})