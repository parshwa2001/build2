import React, { useEffect, useState } from "react";
import "./Portfolio.css"; // Import your CSS file
import { toast } from "react-toastify";
import { getPortfolio } from "../../services/HomePageApi";

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


const Portfolio = () => {

  const [data , setData ] = useState([]);

  useEffect(()=>{
    toast.loading("Loading Home Services Div");
    const response = getPortfolio().then((res)=>{
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
      <div className="h1-heading-container"><h1 className="card-h1" >Portfolio</h1></div>
      <div className="card-container-portfolio">
        {data.map((card) => (
          <div className="card-portfolio" key={card._id}>
            <img src={card.img} alt={`Image ${card.id}`} />
            <p className="card-description-portfolio" style={{color:"white"}}> {card?._doc.data.split(' ').slice(0, 20).join(' ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
