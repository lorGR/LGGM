import axios from "axios";

export async function isUserExist(email: string): Promise<boolean> {
    try {
        const { data } = await axios.post("/users/is-exist", {email});
        if(!data) throw new Error("Couldn't receive data from axios POST /users/is-exist");
        const { isExist } = data;
        return isExist;
    } catch (error) {
        console.error(error);
        return error as false;
    }
}

export async function register(email: string, password: string, confirmPassword: string) {
    try {
        const { data } = await axios.post("/users/register", { email, password, confirmPassword});
        if(!data) throw new Error("Couldn't receive data from axios POST /users/register ");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}