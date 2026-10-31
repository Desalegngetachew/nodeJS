import express from "express";
import { fetchUser, createUser, getAllUsers, updateUser, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.post("/createUser", createUser);
route.get("/fetch", fetchUser);
route.get("/allUsers", getAllUsers);
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);

export default route;