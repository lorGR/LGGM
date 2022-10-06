import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;

if(mongodb_uri) {
    mongoose
        .connect(mongodb_uri)
        .then(() => console.log("Connected To DB"))
        .catch(() => console.log("Falied to Connect To DB"));
} else {
    console.log("Couldn't find mongodb_uri");
}

app.use(express.json());
app.use(express.static("client/build"));

import userRoutes from "./API/users/userRoutes";
app.use("/users", userRoutes);

import userInformation from "./API/usersInformation/userInforamtionRoutes";
app.use("/usersInformation", userInformation);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});
