import { string } from "joi";
import mongoose from "mongoose";

enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

export const UserInformationSchema = new mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    country: String,
    city: String,
    address: String,
    phoneNumber: String,
    birthDay: String,
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

