import React, { useEffect, useState } from 'react'
import "./AboutUs.css";
import { getAbout } from '../../services/HomePageApi';
import { toast } from 'react-toastify';


const AboutUs = () => {

    const [data , setData ] = useState([]);

  useEffect(()=>{
    toast.loading("Loading Home Services Div");
    const response = getAbout().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);
  return (
    <section   className='aboutus-main-container-container'>
    <div class="lg:w-[90%] sm:mb-[4%] lg:mb-[2%]" >
        <div class="row aboutus-main-container" >
            <div class="" className='aboutus-main-container-content'>
                <strong class="section-subtitle"></strong>
                <h2 class="text-gray-900  font-Abhaya about-us-main-heading" >About Us</h2>
                <div className='about-us-main-para'><p className='text-gray-700  font-sans'>
                {data[0]?._doc.data}
                </p> </div>  <div class="experience-box">
                    <div class="experience-content">
                        <div class="experience-number"></div>
                        <div class="experience-info wow fadeInDown"></div>
                    </div>
                </div>

            </div>
            <div class=" lg:ml-[8%] lg:mt-[40%] lg:w-[20%]" >
                <div class="dots-image">

                    <img alt="" className='image'  src={data[0]?.img} />
                    <div class="dots"></div>
                </div>
            </div>
        </div>
    </div>
    
</section>

  )
}

export default AboutUs