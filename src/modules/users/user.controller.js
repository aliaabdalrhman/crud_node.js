import userModel from "../../../DB/models/user.model.js"

//get All User
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).json({ message: "success", users });
    }
    catch (error) {
        return res.status(500).json({ message: "error", error: error.stack });
    }
}
//get User By Id
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(200).json({ message: "success", user });

        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error: error.stack });
    }
}
// delete User
export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.id);
        if (user) {
            return res.status(200).json({ message: "success", user });
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error: error.stack });
    }
}
//update User
export const updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await userModel.findByIdAndUpdate(req.id, { name, email, age }, { new: true });
        if (user) {
            return res.status(200).json({ message: "success", user });
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error: error.stack });
    }
}

