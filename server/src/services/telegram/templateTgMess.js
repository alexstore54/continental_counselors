const utils = require('../../utils/utils');

class TgTemplates {
    static parser(isSucces, message, statusCode){
        let str = ``;
        if(isSucces){
            str += `✅ <b>Успех!</b>\n`;
            str += `<b>Статус: </b>${statusCode}\n`;
            str += `<b>Время: </b>${utils.DateNow()}\n`;
            str += `\n`;
            str += `<b>Сообщение: </b>${message}\n`;
        }else {
            str += `❌ <b>Ошибка!</b>\n`;
            str += `<b>Статус: </b>${statusCode}\n`;
            str += `<b>Время: </b>${utils.DateNow()}\n`;
            str += `\n`
            str += `<b>Сообщение: </b>${message}`
        }
        return str;
    
    }
    static leads(userData){
        let str = ``;
            str += `<b>🤑 Новый клиент 🤑</b>\n`;
            str += '\n';
            str += `<b>Имя: </b>${userData.name}\n`;
            str += `<b>Почта: </b><code>${userData.email}</code>\n`;
            str += `<b>Телефон: </b><code>${userData.phone}</code>\n`;
            str += userData.subject ? `<b>Тема: </b> ${userData.subject}\n` : '';
            str += '\n';
            str += userData.message ? `<b>Сообщение: </b> ${userData.message}\n` : '';
        
        return str;
    
    }

}

module.exports = TgTemplates;


