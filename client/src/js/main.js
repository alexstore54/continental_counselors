import Utils from "./modules/utils/utils";
import ShowData from "./modules/ShowData";


window.addEventListener("DOMContentLoaded", async () => {
    Utils.ScrollTo();
    
    try {
        await ShowData.ShowArticles();
        Utils.saveIDArticle();

        await Utils.handleSubmit();

    }catch(error) {
        console.error(error);
    }
    
}) 


