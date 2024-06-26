const ApiError = require('../../api/exceptions/ApiError');
const fs = require('fs').promises; 
const cheerio = require('cheerio');
const path = require('path');
const uuid = require('uuid');
const config = require('../../../config/config');


class ParserService {
    async getAllArticles(htmlPage){
        
       try {
            const $ = cheerio.load(htmlPage);
            const parentBlock = $('.InsightsLatestInsights_insights-list__oTPQ6');
            if(parentBlock.length === 0) {
                throw ApiError.ParserError(`Родительский блок на ${config.parser.BaseURl + config.parser.EndPoint} не был найден или изменился!`)
            }
            const cards = [];

            parentBlock.find('li').each((index, element) => {
                const card = {
                    image: config.parser.BaseURl + $(element).find('.BaseLinkCard_image-link__qA3l7 img').attr('src'),
                    date: $(element).find('.BaseLinkCard_content__Vjbf2 .Date_date__NFel_').text(),
                    title: $(element).find('.BaseLinkCard_title__lgahZ').text(),
                    link: config.parser.BaseURl + $(element).find('.BaseLinkCard_content__Vjbf2').attr('href'),
                    id: uuid.v4()
                };
                cards.push(card); // Добавляем объект данных карточки в массив
            });
        
            return cards;
       }catch(e){
            if(e instanceof ApiError){
                console.log(e);
                throw e;
            }
       }
    }

    async getArticle(htmlPage) {
        try {
            const $ = cheerio.load(htmlPage);
            const parentBlock = $('.AnimateInContainer_main__4mCHh.container-8.spacer');
            
            if(parentBlock.length === 0) {
                throw ApiError.ParserError(`На детальной новостной странице родительский блок не был найден или изменился!`)
            }
            const Pagedata = {
                title: $('.InsightsInsightHeader_title__vw9G6').text().trim(),
                date: $('.Date_date__NFel_.InsightsInsightHeader_date__9ftCm').text().trim(),
                main: parentBlock.html()
            }
            
            return Pagedata;
        }catch(e){
            if(e instanceof ApiError){
                console.log(e);
                throw e;
            }
        }
    }

   async saveData(articles) {
    try {
        const jsonData = JSON.stringify(articles, null, 2); // 2 пробела для отступов в JSON
        await fs.writeFile(path.resolve(__dirname, '../../../static/parser.json'), jsonData);

        return jsonData;
    } catch (e) {
       console.log(e);
    }
}


}


module.exports = new ParserService();