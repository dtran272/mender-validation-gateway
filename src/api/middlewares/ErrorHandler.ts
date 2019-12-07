import { NextFunction, Request, Response, response } from "express";
import { HttpException } from "../../exceptions/HttpException";

export function errorHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || "An error has occured.";

    res.status(status).send({ status, message });
}
