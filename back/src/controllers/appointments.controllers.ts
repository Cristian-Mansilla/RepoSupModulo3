import { Request, Response } from "express";

export const getsAppointments = async ( req : Request, res : Response ) : Promise<Response> => {
    try {
        return res.status(200).json({
            message: "respuesta a appointments"
        })
    } catch (error) {
        return res.status(404).json({
            message: "",
            error
        })
    }
};

export const getAppointmentById = () => {};

export const addAppointment = () => {};

export const cancelAppointment = () => {};