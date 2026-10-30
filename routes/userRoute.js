import express from "express";
import { fetchUser } from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetchUser);

export default route;