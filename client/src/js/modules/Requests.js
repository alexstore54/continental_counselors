import axios from 'axios';
import ApiError from './ApiError/ApiError';
const {config} = window.AppData;

import Utils from './utils/utils';

class Requests {
    static async GetData () {
        try { 
            const response = await axios.get(`${config.INSIGHTS_URL}/get-all`);
            if(!response.data){
                return ApiError.BadRequest('Error Getting Data');

            }else {
                localStorage.setItem('concorddata', response.data);
                return JSON.parse(response.data);
            }
            
        }catch(e){
            Utils.ShowAlert(e.message);
            Utils.HideSpinner();
            throw e;
        } 
    }
    
    static async PostData(userData){
        try{    
            const res = await axios.post(config.SERVER_URL + '/post-userdata', userData, {headers: {'Content-Type': 'application/json'}});
            if(res.status === 200 && res.statusText === "OK"){
                Utils.ShowAlert(res.data, "green");
            } 
            
        }catch(e){
            if(axios.isAxiosError(e)){
                throw e.response.data;
            }
            Utils.ShowAlert(e);
            console.log(e);
            
        }
    }
    
    
}

export default Requests;