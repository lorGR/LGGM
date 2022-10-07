import express from "express";
import { UserModel, UserValidation } from "./userModel";

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, username, password, confirmPassword } = req.body;
        if (!email || !username || !password || !confirmPassword) throw new Error("Missing fields in register");

        const { error } = UserValidation.validate({ email, username, password, confirmPassword });
        if (error) throw error;

        const userDB = await new UserModel({ email, password, username });
        await userDB.save();

        res.send({ register: true, userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function login(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        if (!email || !password) throw new Error("Missing fields in login");

        const userDB = await UserModel.findOne({ email, password });
        if (!userDB) throw new Error(`Couldn't find user with email: ${email}`);

        res.send({ login: true, userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.body;
        if(!userId) throw new Error("Couldn't receive userId from req.body");

        const userDB = await UserModel.findById(userId);
        if(!userDB) throw new Error(`Couldn't find user with id: ${userId}`);

        res.send({userDB});
    } catch (error) {
        res.send({ error: error.message })
    }
}

export async function isExist(req: express.Request, res: express.Response) {
    try {
        const {email, password, rePassword} = req.body;
        if(!email || !password || !rePassword) throw new Error("missing information from client")
        const userDB = await UserModel.findOne({email});
        userDB ? res.send({isExist: true}) : res.send({isExist: false})
    } catch (error) {
        res.send({error: error.message})
    }
}