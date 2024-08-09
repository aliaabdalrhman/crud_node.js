import joi from 'joi';

export const registerSchema = {
    body: joi.object({
        name: joi.string().min(5).max(10),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        cpassword: joi.valid(joi.ref('password')).required(),
        age: joi.number().positive().integer().min(12).optional()
    }),
}

export const loginSchema = {
    body: joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    })
}