import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    try {
        const { token } = req.headers;
        const decoded = jwt.verify(token, "alia");
        req.id = decoded.id;
        next();
    } catch (error) {
        return res.status(500).json({ message: "catch error ", error: error.stack });
    }
}