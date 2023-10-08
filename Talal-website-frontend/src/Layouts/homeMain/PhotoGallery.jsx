import React, { useEffect, useState } from "react";
import "./PhotoGallery.css"; // Import your CSS file
import { toast } from "react-toastify";
import { getGallery } from "../../services/HomePageApi";

const cards = [
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
];

const cardsTwo =  [
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
   
  ];

const PhotoGallery = () => {

  const [data , setData ] = useState([]);

  useEffect(() => {

    toast.loading("Loading Home Services Div");
    const response = getGallery().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
  },[]);
  return (
    <div className="containerPhoto">
      <h1 style={{color:"lightgray"}}>Gallery</h1>
      <div className="cardWrapperMain">
            <div className="cardWrapper">
                {data.map((card) => (
                <div className="cardPhoto" key={card._id}>
                
                    <img src={card.img} alt={`Image ${card.id}`} />
                    <div className="card-overlay"></div>
                    <p className="card-description">{card._doc.data}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="cardWrapperMainSmall">
            <div className="cardWrapper">
            {data.map((card) => (
                <div className="cardPhoto" key={card._id}>
                
                <img src={card.img} alt={`Image ${card.id}`} />
                <div className="card-overlay"></div>
                <p className="card-description">{card._doc.data}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default PhotoGallery;

