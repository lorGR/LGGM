import express from "express";
import { getUserInformation, setUserInformation } from "./userInformationCtrl";

const router = express.Router();

router
    .post("/setUserInformation", setUserInformation)
    .post("/getUserInformation", getUserInformation)

export default router;