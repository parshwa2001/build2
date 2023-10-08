import React, { useEffect, useState } from 'react'

import "./HomeSlider.css";
import { Carousel } from 'react-responsive-carousel';
import { toast } from 'react-toastify';
import { getHomeSlider } from '../../services/HomePageApi';

const testimonials = [
    [
      {
        avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
        name: "Building"
     },
    ],
    [
        {
            avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
            name: "Building"
         },
    ],
    [
       {
        avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
        name: "Building"
     },
    ]
  ];



const HomeSlider = () => {

  const [data , setData ] = useState([]);

  useEffect(() => {

    toast.loading("Loading Home Services Div");
    const response = getHomeSlider().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);
  return (
    <div className='' style={{width:"90%",height:"60%"}}>
        <div className='container-home'>
        {data.map((item,idx)=>{
          return <div className='box-home' key={idx}>
                <img src={item.img}/>
            </div>
        })}
        </div>
        <div className='alt-container-home'>
        <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        emulateTouch={true}
        centerSlidePercentage={"100%"}
        dynamicHeight={false}
        width="92%"
      >
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-center">
              <div
                key={item._id}
                className="bg-white rounded-xl border shadow-md card-carousel-div"
                class="carousel-card-main"
              >
                <div className="text-center" style={{ marginRight: "-1%" }}>
                  <img
                    src={item.img}
                    className="w-60 h-60"
                    alt={`Avatar of ${item.name}`}
                  />
                </div>
              </div>
          </div>
        ))}
      </Carousel>
      
        </div>
    </div>
  )
}

export default HomeSlider