import joi from "joi";

const getUserSchema = {
    params: joi.object({
        id: joi.string().length(24).required(),
    })
};

export default getUserSchema;