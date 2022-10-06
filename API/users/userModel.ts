import mongoose from "mongoose";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import { UserInformationSchema } from "../usersInformation/userInformationModel";

const joiPassword = Joi.extend(joiPasswordExtendCore);

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    information: {
        type: UserInformationSchema
    }
});

export const UserValidation = Joi.object({
    username: Joi
        .string()
        .alphanum()
        .min(4)
        .max(16)
        .required(),
    email: Joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .minOfSpecialCharacters(1)
        .noWhiteSpaces()
        .required(),
    confirmPassword: Joi.ref('password')
});

export const UserModel = mongoose.model("users", UserSchema);
