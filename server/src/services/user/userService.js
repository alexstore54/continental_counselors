const ApiError  = require('../../api/exceptions/ApiError');
const validator = require('../../utils/validator');
const tgService = require('../telegram/telegramService');


class UserService {
   async PostUserData(userData){
        try {
            const cleanUserData = validator(userData);
            await tgService.leads(cleanUserData);
            
        
        }catch(e){
            if(e instanceof ApiError){
                throw e;
            }
            console.log(e.errors);
        }

    }        



}

module.exports = new UserService();