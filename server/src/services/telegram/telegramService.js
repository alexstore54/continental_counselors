const TelegramBot = require('node-telegram-bot-api');
const config = require('../../../config/config'); // Убедитесь, что путь к конфигу правильный
const template = require('./templateTgMess'); // Путь к шаблонам сообщений
const ApiError = require('../../api/exceptions/ApiError');

class TelegramService {
    constructor() {
        this.parserBot = new TelegramBot(config.tg.parser.Token, {polling: false});
        this.leadsBot = new TelegramBot(config.tg.leads.Token, {polling: false});
    }

    async parser(isSucces, message, status) {
        try {
            const htmlMess = template.parser(isSucces, message, status);

            await this.parserBot.sendMessage(config.tg.parser.ChatID, htmlMess, {parse_mode: 'HTML'});
        } catch (error) {
            console.error('Ошибка при отправке сообщения в Telegram:', error);
        }
    }

    async leads(userData) {
        try {
            // console.log(`I am from TgService: ${userData}`)
            const htmlMess = template.leads(userData);
            await this.leadsBot.sendMessage(config.tg.leads.ChatID, htmlMess, {parse_mode: 'HTML'});
        } catch (error) {
            if(error.response.statusCode === 400){
                throw ApiError.BadRequest("Server error");
            }
        }
    }
}

module.exports = new TelegramService();
