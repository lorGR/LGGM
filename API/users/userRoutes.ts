import express from "express";
import { getUser, login, register } from "./userCtrl";

const router = express.Router();

router
    .post("/register", register)
    .post("/login", login)
    .post("/getUser", getUser)

export default router;