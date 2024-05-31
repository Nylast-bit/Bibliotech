import {Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async(req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){ return res.status(400).json({error : "You are not authenticated"})};

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET || "") as any;
        req.user = user;
        next();
    } catch(error){
        return res.status(400).json({error: "invalid token"})
    }
    return;
}