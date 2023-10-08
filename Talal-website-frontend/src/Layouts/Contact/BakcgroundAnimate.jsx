import React, { useState, useEffect, useRef } from 'react';
import './BackgroundAnimate.css';// Create this CSS file for styling
import { GiDoorHandle } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { sendMessage } from '../../services/ContactPage';

function StaticBackground() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const handleSubmit = ()=>{
    
    const name = nameRef.current.value;
    const  email = emailRef.current.value;
    const  msg  = msgRef.current.value;

    const payload = {
      name : name,
      email : email,
      msg : msg
    }

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

if (emailRegex.test(email)  === false) {
  toast.error("InValid email address");
}

    if(!name || !email || !msg){
      toast.error("Try Again Fields are empty");
    } 
    else{
    toast.loading("Loading Home Services Div");
    const response = sendMessage(payload);
    if(response){
      toast.dismiss();
      toast.success("Successfully added");
    }
    else{
      toast.error("Try Again!!");
    }
  }
  }
  return (
    <div style={{width:"100%",height:"100%"}}>
    <div className="static-background" >
     <h1>Contact Us</h1> 
     </div>
     <div className='white-background'>White Background</div>
     <div className='static-background2'>
     <div className='form-div'>
     <div className='form-form-div'>
     <div className='label-input-div'>
     <label>Enter Your Name</label>
     <input ref={nameRef}/>
     </div>
     <div className='label-input-div'>
     <label>Enter Your Email</label>
     <input ref={emailRef} type='email'/>
     </div>
     <div className='label-input-div'>
     <label>Enter Your Message</label>
     <textarea ref={msgRef}/>
     </div>
     <div className='label-input-div'>
     <button onClick={handleSubmit}>Submit</button>
     </div>
 </div>
 </div>
 </div>
 </div>
  );
}

export default StaticBackground;
