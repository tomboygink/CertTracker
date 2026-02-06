import jwt, { SignOptions, Secret } from "jsonwebtoken";
import { StringValue } from "ms"
import config from '../config.json'

const JWT_SEC: Secret = config.code_time.code;
const JWT_OPTIONS: SignOptions = { expiresIn: config.code_time.time as StringValue };

export function generateToken(user: any) {
    return jwt.sign(
        {
            id: user.id,
            login: user.login,
            access_id: user.access_id
        },
        JWT_SEC,
        JWT_OPTIONS
    );
}

export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SEC);
}