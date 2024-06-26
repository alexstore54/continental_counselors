class ApiError extends Error {
    constructor(status, message, errors){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static ErrorValidation(message, errors = []){
        return new ApiError(400, message, errors);
    }
    static BadRequest(message, errors = []){
        return new ApiError(404, message, errors);
    }
}

export default ApiError;