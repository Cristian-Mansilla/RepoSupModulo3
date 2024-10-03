import { Request, Response } from "express";
import { svc_getUsers, svc_createUser, svc_deleteUser } from "../services/svc_Users";
import IUser from "../interfaces/IUser";

export const getUsers = async (req : Request, res : Response) => {
    try {
        const db_users = svc_getUsers();
        res.status(200).json(db_users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Ups... ocurrio un problema al obtener una lista de usuarios"
        })
    }
};

export const createUser = async (req : Request, res : Response) => {
    try {
        const {name,email,active} = req.body;
        const newUser:IUser = await svc_createUser({name,email,active});
        res.status(201).json(newUser);
    } 
    catch(error) {
        console.log(error);
        res.status(500).json({
            message:"Ups, algo salio mal durante la creacion de un nuevo usuario"
        });
    }
};

export const deleteUser = async () => {};