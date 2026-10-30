import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exist." });
        }
        const savedUser = await userData.save();
        return res.status(201).json({
            message: `${name}, User created successfully`,
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


export const fetchUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "Users fetched successfully" });
    } catch (error) {
        console.log("Error happened", error);
    }
};


