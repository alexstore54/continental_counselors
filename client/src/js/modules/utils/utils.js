import Toastify from 'toastify-js';
import Validator from './Validator';
import ApiError from '../ApiError/ApiError';
import Requests from '../Requests';

class Utils {
    
    static HideSpinner() {
        const container = document.querySelector('#custom_news-data');
        container.innerHTML = null;
        container.innerHTML = `<div style="font-family: 'Nunito', 'sans-serif'; font-weight: 700; font-size: 4rem;" class="text-center text-uppercase">ERROR 404. <br> Unable to find articles</div>`
    }   

    static ShowAlert(e, color = "#dc3545") {
        Toastify({
            text: e,
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              'font-family': '"Nunito", sans-serif',
              "background": color,
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

   static ScrollTo(){
        const links = document.querySelectorAll('.home_news');
           
        links.forEach(link => {
            link.addEventListener('click', (e) => {
            
                const gotoBlock = document.querySelector(e.target.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 90; 
                
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior:"smooth"
                })
                
                document.querySelector('.nav-menu-wrapper').classList.remove('show');
        })
        })
    }

    static saveIDArticle () {
        const articleBtns = Array.from(document.querySelectorAll('.readmore-card-btn'));
        articleBtns.forEach(art => {
            art.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                localStorage.setItem('Article-id', JSON.stringify(id));
            })
        })
    }

    static handleSubmit() {
        try {
            const form = document.querySelector("#lawbridge-form");
            if(!form){
                throw ApiError.ErrorValidation("Form doesn't exist");
            }
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
                    const [user_data, errors] = Validator(form);
                    if (errors.length > 0) {
                        errors.forEach(err => Utils.ShowAlert(err))  
                    }else{
                        try {
                            await Requests.PostData(user_data);
                            form.reset(); 
                        }catch(e){
                            if(e.errors.length > 0){
                                e.errors.forEach(err => Utils.ShowAlert(err));
                            }
                            Utils.ShowAlert(e.message)
                            
                        }
                    }              
            }) 

        }catch(e){
            
            if(e instanceof ApiError){
                Utils.ShowAlert(e.message);
            }
             
        }

    }
}

export default Utils;


