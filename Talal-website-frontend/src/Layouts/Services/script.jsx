import React, { useEffect, useState, useRef } from 'react';

import "./style.css";
import { toast } from 'react-toastify';
import { getServicePage } from '../../services/ServicePageApi';
const Slider = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [title , setTitle] = useState("Building/Planning");
  const [description , setDecription] = useState("Talal Al-Ghanim Real Estate bases on the highest levels of integrity to make its decisions. We record communication with our clients and respect their decisions even as we make recommendations.");
  const slideRef = useRef(null);

  const dataTitle = [
    {
      id : 1,
      imgUrl : "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
      title :"Real Estate",
        description:"Talal Al-Ghanim Real Estate bases on the highest levels of integrity to make its decisions. We record communication with our clients and respect their decisions even as we make recommendations.",
        
    },
    {
        id : 1,
        imgUrl : "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
        title :"Building/Planning",
         description:"We work with architects and designers to produce beautiful, functional structures. Call us today and bring our project management skills and extensive construction experience to your next project.",
    },
    {
      id : 1,
      imgUrl : "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600",
      title :"LawFirm",
    description:"We know that legal action can sometimes be overwhelming. We are dedicated to providing you help in language that you can understand.",
    
  },
  {
    id : 1,
    imgUrl : "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
    title :"Insurance",
    description:"We deal in various insurance covers (Such as Life, Medical, Workmen's, Compensation, Third Party, Motor Comprehensive ETC.) with qualified experience staff providing a wide protection covers at lowest rates possible.",
   
},


{
  id : 1,
  imgUrl : "https://images.hdqwalls.com/download/tokyo-skycrapper-building-sunset-cityscape-b7-1400x900.jpg",
  title :"Restaurant/Cafes",
    description:"We pride ourselves on wide range of beverages, freshly made salads, sandwiches, hot dishes & desserts. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.",
    
},
{
  id : 1,
  imgUrl : "https://images.hdqwalls.com/download/tokyo-skycrapper-building-sunset-cityscape-b7-1400x900.jpg",
  title :"Construction",
    description:"We are seeking a hard-working and reliable construction worker to join our team. You will participate in a variety of construction projects and follow construction plans and instructions from the site supervisor. Although experience isn't essential, you will have to be physically fit and a fast learner.",
    
},

];


const [data , setData ] = useState([]);

useEffect(() => {

  toast.loading("Loading Home Services Div");
  const response = getServicePage().then((res)=>{
    toast.dismiss();
    console.log(res);
    setData(res.data);
    toast.success("Successfully Fetched");
  }).catch((Err)=>{
    toast.error("Try Again!");
  });
},[]);

  const handleClickNext = () => {
    const items = slideRef.current.querySelectorAll('.item-services');
    setTitle(items[(items.length-1)%(items.length)].querySelector("h1").textContent);
    setDecription(items[(items.length-1)%(items.length)].querySelector("p").textContent);
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    const items = slideRef.current.querySelectorAll('.item-services');
    setTitle(items[(items.length -1 )%(items.length)].querySelector("h1").textContent);
    setDecription(items[(items.length -1 )%(items.length)].querySelector("p").textContent);
    slideRef.current.prepend(items[items.length - 1 ]);
  };

  
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingProgress < 100) {
        setLoadingProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 500);



    return () => {
      clearInterval(interval);
    };
  }, [loadingProgress]);

  return (
    <>
    <div id="root" style={{width:"100%",height:"100%"}}>
    
      <div className="container-services" >
      
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div style={{width:"100%",height:"100%"}} ref={slideRef}>
          {data.map((item,idx) => (
            <div key={idx} className="item-services" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="content-services" key={idx}>
                <h1>{dataTitle[idx].title}</h1>
                <p>{ window.innerWidth <="768px"  ? item._doc.data.slice(0, 200) : item._doc.data}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='buttons-services-main-div'>
        <div className="buttons-services">
          <button id="prev" onClick={handleClickNext}>
            <i className="fa fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleClickPrev}>
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
        </div>
      </div>
    </div>
    <div class="container-content">
      <h1 class="title-content">Know More</h1>
      <div class="description-content">
        <p>{description}</p>
      </div>
    </div>
    </>
  );
};

export default Slider;
