import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: `User ${req.body.name} / ${req.body.email} already exist.` });
        }
        const savedUser = await userData.save();
        return res.status(201).json({
            message: `User ${req.body.name}, created successfully`,
            user: savedUser
        });
    } catch (error) {
        console.error("Create User Error:", error);

        return res.status(500).json({
            message: "Failed to create user",
            error: error.message
        });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const allUser = await User.find();
        if (allUser.length === 0) {
            res.status(400).json({ message: "Desalegn, User does not exist" });
        }
        return res.status(200).json({ allUser });
    } catch (error) {

    }
}
// UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// DELETE USER
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.id
        );

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const fetchUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "Users fetched successfully" });
    } catch (error) {
        console.log("Error happened", error);
    }
};


