import ShowData from "./modules/ShowData" 


window.addEventListener("DOMContentLoaded", () => {
    try {
        ShowData.ShowDetailedArticle();
    }catch(e) {
        console.log(e);
    }
})