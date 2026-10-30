import express from "express";
import { fetchUser, createUser } from "../controller/userController.js";

const route = express.Router();

route.post("/createUser", createUser);
route.get("/fetch", fetchUser);

export default route;