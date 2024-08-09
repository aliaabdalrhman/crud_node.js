import connectDb from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import userRouter from "./modules/users/user.router.js";

const initApp = (app, express) => {
    connectDb();
    app.use(express.json());
    app.use('/auth', authRouter);
    app.use('/users', userRouter);
    app.get('*', (req, res) => {
        return res.status(404).json({ message: "page not found" });
    })
}

export default initApp;