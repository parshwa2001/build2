import React, { useEffect, useState } from "react";
import "./Main.css"; // Import your CSS file
import { getAboutPage } from "../../services/AboutPageApi";
import { toast } from "react-toastify";

const cards = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 3",
  },
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 3",
  },
];


const About = () => {

  const [data , setData ] = useState([]);

  useEffect(() => {

    toast.loading("Loading Home Services Div");
    const response = getAboutPage().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);

  return (
    <div className="container-portfolio">
      <div className="background-image-portfolio"></div>
      <div className="heading-aboutus">
      <h1>About Us</h1>
      </div>
      <div className="about-page">
        <img src={data[0]?.img}/>
      </div>


      <div className="about-page-content">
        <p>{data[0]?._doc.data}</p>
      </div>

      <div className="about-page-icons">
            <div className="about-page-icons-div">
                <img src="https://th.bing.com/th/id/OIP.LmueXuCfKUCJMmW8_1nP5gHaHk?w=195&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7"/>
                <p>{data[0]?._doc.icon1_data} </p>
            </div>
            <div className="about-page-icons-div">
            <img src="https://th.bing.com/th?q=Product+Vision+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defdefault"/>
            <p>{data[0]?._doc.icon1_data}</p>
            </div>
      </div>
    </div>
  );
};

export default About;