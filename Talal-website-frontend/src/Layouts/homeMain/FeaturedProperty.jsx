import React, { useEffect, useRef, useState } from "react";
import {FaBuilding} from 'react-icons/fa'
import {BsAwardFill} from 'react-icons/bs';
import {AiFillInsurance} from 'react-icons/ai';
import {IoIosCloud} from 'react-icons/io';
import {MdConstruction} from 'react-icons/md';

import {MdOutlineRealEstateAgent} from 'react-icons/md';
import "./FeaturedProperty.css";
import { toast } from "react-toastify";
import { getService } from "../../services/HomePageApi";

const servicesData = [{
    title :"Building/Planning",
    description:"We work with architects and designers to produce beautiful, functional structures. Call us today and bring our project management skills and extensive construction experience to your next project.",
    icon : <FaBuilding style={{ width : "90%"  , height:"100%" ,paddingLeft:"2%"}}/>
},
{
    title :"LawFirm",
    description:"We know that legal action can sometimes be overwhelming. We are dedicated to providing you help in language that you can understand.",
    icon : <BsAwardFill style={{ width : "100%"  , height:"100%" }}/>
},
{
    title :"Insurance",
    description:"We deal in various insurance covers (Such as Life, Medical, Workmen's, Compensation, Third Party, Motor Comprehensive ETC.) with qualified experience staff providing a wide protection covers at lowest rates possible.",
    icon : <AiFillInsurance style={{ width : "100%"  , height:"100%" }}/>
}
,{
    title :"Real Estate",
    description:"Talal Al-Ghanim Real Estate bases on the highest levels of integrity to make its decisions. We record communication with our clients and respect their decisions even as we make recommendations.",
    icon : <MdConstruction style={{ width : "100%"  , height:"100%" }}/>
},
{
    title :"Restaurant/Cafes",
    description:"We pride ourselves on wide range of beverages, freshly made salads, sandwiches, hot dishes & desserts. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.",
    icon : <IoIosCloud style={{ width : "100%"  , height:"100%" }}/>
},
{
    title :"Construction",
    description:"We are seeking a hard-working and reliable construction worker to join our team. You will participate in a variety of construction projects and follow construction plans and instructions from the site supervisor. Although experience isn't essential, you will have to be physically fit and a fast learner.",
    icon : <MdOutlineRealEstateAgent style={{ width : "100%"  , height:"100%" }}/>
}]
export default function FeaturedProperty() {

   

    const [data , setData ] = useState([]);

  useEffect(()=>{
    toast.loading("Loading Home Services Div");
    const response = getService().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);


    return (
        <>
            <div className="max-w-[1440px]" style={{height:"auto"}} >
                <div className=" bg-gray-100 " style={{backgroundColor:"#D9DDDC"}}>
                    <div className="services-heading"><h2 className= " text-gray-800  " >Services</h2></div>
                    <p className="text-gray-400" >Let&apos;s find you a better place for </p>
                        <div style={{width:"100%",height:"100%"}} className="card-container-div">
                            {servicesData.map((service,indx)=>{
                                return <div className="card-container bg-gray-100" key={indx} >
                                    <div className="card-icon card-icon-hover" >{service.icon}</div>
                                    <div>{service.title.length > 10 ? <h2 className="text-gray-700">{service.title}</h2>
                                     : <h2 className="text-gray-700">{service.title}</h2>}</div>
                                     <div className="card-para"><p>{data[indx]?._doc.data}</p></div>
                                    </div>
                            })}
                        </div>
                </div>
            </div>
        </>
    )
}