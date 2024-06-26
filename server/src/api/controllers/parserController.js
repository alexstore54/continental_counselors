const Parser = require('../../services/parser/parserService');
const ApiError = require('../../api/exceptions/ApiError');
const axios = require('axios');


const config = require('../../../config/config');


class ParserController {
    constructor () {
        this.getDetailedArticle = this.getDetailedArticle.bind(this);
        this.getAllArticles = this.getAllArticles.bind(this);
    }

    async getAllArticles(){        
        try{
            const response = await axios.get(config.parser.BaseURl + '/' + config.parser.EndPoint);

            if (response.status === 200 
                && response.data) 
            {   
                const articles = await Parser.getAllArticles(response.data);
                const SuppArticles = await this.getDetailedArticle(articles);
               
                
                await Parser.saveData(SuppArticles);
 
            } 
        } catch (error) {
           if(axios.isAxiosError(error)){
                throw ApiError.BadRequest(`Данные с ${config.parser.BaseURl + '/' + config.parser.EndPoint} не были получены. Вероятно сломался сайт или адрес изменился`);
           }else{
                throw error;
           }
        }
    }

    async getDetailedArticle(articles) {
         try{
                const wholeArticles = await articles.map(async article => {
                    const htmlPage = await axios.get(article.link);
                   
                    const articleData = await Parser.getArticle(htmlPage.data);
                    const detailedArticle = { ...article, page: articleData };
                    
                    return detailedArticle;

                });

                return Promise.all(wholeArticles);
                
        }catch(error){
            if(axios.isAxiosError(error)){
                throw ApiError.BadRequest(`Данные с ${config.parser.BaseURl + '/' + config.parser.EndPoint} не были получены. Вероятно сломался сайт или адрес изменился`);
           }else{
                console.log(`parserController: ${error}`);
                throw error;
           }
            
        }   
    }  

   

}


module.exports = new ParserController();