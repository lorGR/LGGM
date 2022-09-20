import { string } from "joi";
import mongoose from "mongoose";
import { UserSchema } from "../userModel";

enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

export const UserInformationSchema = new mongoose.Schema({
    // user: UserSchema,
    firstName: String,
    lastName: String,
    Country: String,
    City: String,
    Address: String,
    phoneNumber: String,
    birthDay: Date,
    about: String,
    proffession: String,
    gender: {
        type: String,
        enum: Gender,
        default: Gender.OTHER
    },
    links: {
        linkdin: String,
        facebook: String,
        gitHub: String,
        instagram: String
    }
});

export const UserInformationModel = mongoose.model("users-information", UserInformationSchema);

