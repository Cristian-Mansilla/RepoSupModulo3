import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    const { token } = req.headers;
    if(token==="autenticado") next()
    else res.status(400).json({message:"Error. Falta autenticacion"});
};
