
module.exports = class ApiError extends Error {
    
    constructor(status, message, errors){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message = "Bad Request", errors = [], status = 500){
        return new ApiError(status, message, errors);
    }
    static ParserError(message, errors = [], status = 503){
        return new ApiError(status, message, errors);
    }
    static ValidationError(message, errors = [], status = 400){
        return new ApiError(status, message, errors);
    }


}


