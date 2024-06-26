const controller = require('../api/controllers/parserController');
const tgService = require('../services/telegram/telegramService');
const cron = require('node-cron');
const config = require('../../config/config');

//cron.schedule('* * * * *', async () => {
cron.schedule('0 9,21 * * *', async () => {
    try {
        await controller.getAllArticles();
        await tgService.parser(true, `Данные с ${config.parser.BaseURl + '/' + config.parser.EndPoint} были успешно обновлены`, 200);
        
    } catch (e) {
        await tgService.parser(false, e.message, e.status);
        
    }
});