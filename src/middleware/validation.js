
const dataMethods = ['body', 'params', 'query','headers','file'];

const validation = (schema) => {
    const validationArray = [];
    return (req, res, next) => {
        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false });
                if (validationResult.error?.details) {
                    validationArray.push(validationResult.error.details)
                }
            }

        })
        if (validationArray.length > 0) {
            return res.json({ message: "validation error ", validationArray });
        }
        else {
            next();
        }
    }
}



export default validation;