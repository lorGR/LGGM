import express from "express";
import { getUser, login, register, isExist } from "./userCtrl";

const router = express.Router();

router
    .post("/register", register)
    .post("/login", login)
    .post("/getUser", getUser)
    .post("/is-exist", isExist)

export default router;