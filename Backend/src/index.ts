// DEPENDENCIES
import express from "express";
import { Request, Response, NextFunction } from 'express';
// import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import prisma from "../lib/prisma"
import bookRoute from './routes/book.routes'

// START SERVER APP
const app = express();

// ENABLE.ENV
dotenv.config();

// MIDDELWARES

app.use(cookieParser())
app.use(express.json());
app.use('/api/',bookRoute);

// MIDDELWARES ERROR HANDLER
app.use((_err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = _err.status || 500;
    const message = _err.message || "Something went wrong!";

    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// APP LISTENING (PRISMA & DATABASE ERROR HANDLER)
prisma.$connect()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}. Database connection successful.`);
        });
    })
    .catch((error: any) => {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    });