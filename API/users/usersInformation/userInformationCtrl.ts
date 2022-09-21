import express from "express";
import { UserModel } from "../userModel";
import { UserInformationModel } from "./userInformationModel";

export async function setUserInformation(req: express.Request, res: express.Response) {
    try {
        const { userId, firstName, lastName,
            country, city, address,
            phoneNumber, birthDay, about,
            proffession, gender, links, } = req.body;

        if(!userId) throw new Error(`Couldn't receive userId from req.body`);

        // Check if userId exist in users DB
        const userExist = await UserModel.findOne({"_id": userId});
        if (!userExist) throw new Error(`Couldn't find user with userId: ${userId}`);

        if(userExist) {
            const userInformationDB = await new UserInformationModel({
                userId,
                firstName,
                lastName,
                country,
                city,
                address,
                phoneNumber,
                birthDay,
                about,
                proffession,
                gender,
                links
            });
            await userInformationDB.save();
            res.send({ setUserInformation: true, userInformationDB });
        }

    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getUserInformation(req:express.Request, res: express.Response) {
    try {
        const { userId } = req.body;
        if(!userId) throw new Error(`Couldn't receive userId from req.body`);

        const userInformationDB = await UserInformationModel.findOne({userId});
        if (!userInformationDB) throw new Error(`Couldn't find userInformation with userId: ${userId}`);

        res.send({userInformationDB});
    } catch (error) {
        res.send({error: error.message});
    }
}

