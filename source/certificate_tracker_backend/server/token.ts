import { generateToken, verifyToken } from '../../config/func/jwt'
import config from '../../config/config.json'
import ms, { StringValue } from "ms"
import { Response } from "express";
export function add_token(data: any, res: Response) { //если проверка прошла то //генерация кода 
    const token = generateToken(data[0]);
    const jwtExpires = config.code_time.time as StringValue;
    const cookieMaxAge = ms(jwtExpires)
    //установка куков httponly 
    res.cookie("access_token", token,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", path: "/", maxAge: cookieMaxAge
        });
}

export function verif_token(token: any) { return verifyToken(token) }

export async function delete_token(res: Response) {
    console.log("delete token")
    res.clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax", path: "/"
    });
    console.log("success")
}