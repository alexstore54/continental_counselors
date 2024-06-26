"use strict";
import ApiError from "./ApiError/ApiError";
import Utils from "./utils/utils";
const {config} = window.AppData;

class ShowData {
    async ShowArticles() {
        try {
            const Requests = await import("./Requests"); //Проведена умышленная изоляция импорта, так как в Requests есть window.AppData, который использует config, а в ShowDetailedArticle() window.AppData не используется и из-за этого происходят конфликты 
        
            const data = await Requests.default.GetData();
                const container = document.querySelector('#custom_news-data');
                container.innerHTML = null;

                container.innerHTML = `${data.map((article, index) => {
                    return `<div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center gy-5 gx-2">
                                    <div class="card">
                                    <figure class="card__thumb">
                                        <img src="${article.image}" class="card__image"alt="${article.title}">
                                        <figcaption class="card__caption">
                                            <h2 class="card__title">${article.title}</h2>
                                            <p class="card__snippet">${article.date}</p>
                                            <a href="news" data-id="${article.id}" class="card__button readmore-card-btn">Read more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        `
                }).join('')}`


        }catch(e) {
            throw e;
        }
    }

    async ShowDetailedArticle() {
        try {
            const container = document.querySelector('#section-news-container');
            const data = JSON.parse(localStorage.getItem('concorddata'))
            const id = JSON.parse(localStorage.getItem('Article-id'))
            let Article;
             
            if(!data || !id) {
                const Requests = await import("./Requests");
                const data = await Requests.default.GetData();

                Article = data[0]; //Если каким-то образом на новостной странице не отобразились данные из статьи взятые из localstorage, пробуем сделать запрос напрямую и взять первый объект
                // if(!Article){
                //     throw ApiError.ErrorValidation("Error 404. Article not found");
                // }
            }else {
                Article = data.find(obj => id === obj.id);
            }

            if(Article){
                container.classList.add('py-5', 'container')
                container.innerHTML = null;
                container.innerHTML = `
                    <h1 class="pt-5 pb-3 py-3 border-bottom">${Article.page.title}</h1>
                    <span class="text-secondary d-inline-block pt-1"><i>${Article.page.date}</i></span>
                    <div class="pt-4">${Article.page.main}</div>
                `;    
            }
            
        }catch(e){
            if(e instanceof ApiError){
                Utils.ShowAlert(e.message);
                throw e;
            }
        }
    }
}

export default new ShowData();

