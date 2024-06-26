import Utils from "./modules/utils/utils"


window.addEventListener("DOMContentLoaded", () => {
   try{
        Utils.handleSubmit();

   }catch(e){
        console.log("Error in main contacts js");
   }
})