import mongoose from "mongoose";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joiPassword = Joi.extend(joiPasswordExtendCore);

const UserSchema = new mongoose.Schema({
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
    information: {
        type: Object
    }
});

const UserValidation = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(4)
        .max(16)
        .required(),
    email:  Joi.string()
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
