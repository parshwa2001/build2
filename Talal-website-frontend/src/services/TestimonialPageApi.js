import axios from 'axios'

const domain = "http://52.54.253.207:8000";

export const getTestimonialPage = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "testimonial",
                sub_type : "testimonial"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
