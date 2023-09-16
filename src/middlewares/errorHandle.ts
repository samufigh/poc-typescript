import { CustomError } from "@/protocols/typeTask"
import { NextFunction, Request, Response } from "express"

export default function errorHandlingMiddleware(error :CustomError, req :Request, res :Response, next :NextFunction) {
	if (error.type === "statusError"){
        return res.status(error.status).send(error.message)
    }
    if (error.type === "idError"){
        return res.status(error.status).send(error.message)
    }
    if (error.type === "notFound"){
        return res.status(error.status).send(error.message)
    }
	return res.sendStatus(500)
}