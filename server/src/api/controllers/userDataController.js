const UserService = require('../../services/user/userService');
const fs = require('fs'); 
const path = require('path');
const ApiError = require('../../api/exceptions/ApiError');



class UserController {
    async GetAll (req, res, next) {
        try {
            const filePath = path.resolve(__dirname, '../../../static/parser.json');
            const JsonData = await fs.promises.readFile(filePath, 'utf8');
            console.log('ok');
            res.json(JsonData);

        }catch(e) {
            next(e)
        }   
    }

    async PostUserData (req, res, next) {
        try{
            const UserData = req.body;
            await UserService.PostUserData(UserData);
            
            res.status(200).json("Your application has been successfully submitted! Our specialist will get in touch with you shortly");

        }catch(e){
            next(e);   
        }  
    } 
}

module.exports = new UserController();