import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginSchema, registerSchema } from "./auth.validation.js";

//register
export const Register = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;
        const passwordHashed = await bcrypt.hash(password, parseInt(process.env.SALTROUND));
        // 1- create
        const user = await userModel.create({ name, email, password: passwordHashed });
        // 2- new model
        // const user = new userModel({ name, email, password: passwordHashed });
        // await user.save();
        // 3- insert Many
        // const user = await userModel.insertMany({ name, email, password: passwordHashed });
        return res.status(201).json({ message: "success", user });
    }
    catch (error) {
        return res.status(500).json({ message: "catch error", error: error.stack });

    }
}
// login 
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        const check = await bcrypt.compareSync(password, user.password);

        if (!check) {
            return res.status(401).json({ message: "invalid password" });
        }
        const token = await jwt.sign({ id: user._id }, "alia");

        return res.status(200).json({ message: "success", token });
    }
    catch (error) {
        return res.status(500).json({ message: "error", error: error.stack })
    }
}
