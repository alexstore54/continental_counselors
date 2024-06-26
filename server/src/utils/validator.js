const ApiError = require('../../src/api/exceptions/ApiError');

module.exports = function validator(UserData){
    const fields = ["name", "subject", "email", "phone", "message"];
    const validatedData = {};
    const errors = [];
    
    fields.forEach(field => {
        if(UserData[field]) {
            validatedData[field] = UserData[field];
        }
    })



    if(Object.keys(validatedData).length === 0){
        throw ApiError.BadRequest('Empty form')
    }

    if(validatedData["name"]){
        if(validatedData["name"].length < 2 || validatedData["name"].length > 25){
        errors.push('Invalid name')
        }
    }
    
    if(validatedData["subject"]){
        if(validatedData["subject"].length < 2 || validatedData["subject"].length > 25){
            errors.push('Invalid subject');
        }
    }
    
    if(validatedData["email"]){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(validatedData["email"])){
            errors.push('Invalid email')
         }
    }
    if(validatedData["phone"]){
        const phoneRegex = /^\+?(?:[1-9]\d{1,2})?\d{10,15}$/;
         if(!phoneRegex.test(validatedData["phone"])){
            errors.push('Invalid phone')
         }
    }

    if(errors.length > 0) {
        throw ApiError.ValidationError('Error validation', errors);
    }
    

    return validatedData;
    

}