import { NextFunction } from "express";
import { verifyJwtToken } from "../services/auth";

export const userAuth = (req: any, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1];
    const user = verifyJwtToken(token);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Attach user info if needed
    req['user'] = user;

    next();
};