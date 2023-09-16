import httpStatus from "http-status";

export function statusError(){
    return{
        type: "statusError",
        message: `O status deve ser: "fazer", "fazendo" ou "feito"`,
        status: httpStatus.UNPROCESSABLE_ENTITY,
    }
}

export function idError(){
    return{
        type: "idError",
        message: `Insira o id da tarefa`,
        status: httpStatus.UNPROCESSABLE_ENTITY,
    }
}

export function notFoundIdError(){
    return{
        type: "notFound",
        message: `Insira o id de tarefa existente`,
        status: httpStatus.NOT_FOUND,
    }
}