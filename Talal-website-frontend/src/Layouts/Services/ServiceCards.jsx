import React from "react";
import "./ServiceCards.css"; // Import your CSS file

const cards = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Don't just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years.",
  },
];


const ServiceCards = () => {
  return (
    <div className="container-service">
      <div className="background-image-service"></div>
      <div className="h1-heading-container-service"><h1 className="card-h1-service" >The major work fields</h1></div>
      <div className="card-container-service">
        {cards.map((card) => (
          <div className="card-service" key={card.id}>
            <img src={card.imageSrc} alt={`Image ${card.id}`} />
            <p className="card-description-service" style={{color:"white"}}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
