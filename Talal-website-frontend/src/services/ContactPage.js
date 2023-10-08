import axios from 'axios'

const domain = "http://52.54.253.207:8000";

export const sendMessage = async(payload)=>{
    try{
        const response = await axios.post(`${domain}/add-user`,payload);
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
