class CustomAPIError extends Error {
    constructor(message , statusCode){
        super(message)
        this.statusCode= statusCode
    }
}

const CreateCustomError = (msg , statusCode) =>{
    return new CustomAPIError(msg,statusCode)
}


module.exports ={CreateCustomError , CustomAPIError}