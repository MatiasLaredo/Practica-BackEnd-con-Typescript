
import type { Request, Response, NextFunction } from 'express';


const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const log = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

        if (res.statusCode >= 400) {
            console.error(`❌ ${log}`);
        } else {
            console.log(`✅ ${log}`);
        }
    });
    next();
};



export default logMiddleware;