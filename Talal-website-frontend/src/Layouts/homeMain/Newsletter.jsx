import React, { useEffect, useState } from 'react'

import "./Newsletter.css";
import { getFooter } from '../../services/HomePageApi';
import { toast } from 'react-toastify';

export default function Newsletter() {
    const [data , setData ] = useState([]);

  useEffect(()=>{
    toast.loading("Loading Home Services Div");
    const response = getFooter().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);
    return (
        <div style={{width:"100%",height:"100%"}}>
        <div className='container'>
        
        <div style={{display:'flex',flexDirection:"column" }} className='footer-conainer'> 
        <div className='footer-icon'> <img src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_address_icon.png' alt='icons'/>
        </div> <div className='footer-content'> <h1 >{data[0]?._doc.data}</h1>
        </div></div>
        <div style={{display:'flex',flexDirection:"column"}} className='footer-conainer'>
        <div className='footer-icon'> <img src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_phone_icon.png' alt='icon'/>
        </div> <div className='footer-content'><h1 >{data[1]?._doc.data}</h1>
        </div></div>
        <div style={{display:'flex',flexDirection:"column"}} className='footer-conainer'>
           <div className='footer-icon'> <img  src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_working_hour_icon.png' alt='icon'/>
           </div> <div className='footer-content'><h1>{data[2]?._doc.data}</h1></div>
        </div></div>
        </div>
    )
}