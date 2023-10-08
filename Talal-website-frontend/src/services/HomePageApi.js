import axios from 'axios'
import { toast } from 'react-toastify';

const domain = "http://52.54.253.207:8000";

export const getHomeSlider = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "homeslider"
            }
        });
        return response.data;
    }
    catch(err){
        console.log(err);
        toast.error(err.message);
    }
}


export const getAbout = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "about",
                sub_type : "about"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getPortfolio = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "portfolios"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getService = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "services"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getTestimonial = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "testimonials"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getDataCredentials = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "dataCredentials"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getFooter = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "footer"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}


export const getGallery = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "gallery"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
