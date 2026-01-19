import type { Request, Response, NextFunction } from "express";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error encountered: ${err.message} on ${req.method} ${req.originalUrl}`);
  next();
    res.status(500).json({ status: 'ERROR', message: err.message || 'Internal Server Error' });}




export default errorMiddleware;


