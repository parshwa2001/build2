import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroCard from "./HeroCard";
import FlipCard from "../../components/Sliders/FlipCard";


function HomePageCarousel() {
  const carouselItems = [
    {
      id: 1,
      image: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
      caption: "Welcome to Our Website",
    },
    {
      id: 2,
      image: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
      caption: "Discover Our Services",
    },
    {
      id: 3,
      image: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
      caption: "Meet Our Team",
    },
    {
      id: 4,
      image: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
      caption: "Contact Us Today",
    },
  ];

  return (
    <div className="homepage-carousel" style={{marginLeft:"5%",width:"90%",height:"100%",borderRadius:"12px"}}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000} // Change this value to adjust slide duration (in milliseconds)
      >
        {carouselItems.map((item) => (
          <div key={item.id} style={{height:"70%",marginBottom:"10%",width:"90",borderRadius:"12px"}} >
            <img src={item.image} alt={item.caption} />
            <div style={{marginTop:"-40%"}}>
                <HeroCard/>
            </div>
            
          </div>
        ))}
      </Carousel>
      <FlipCard/>
    </div>
  );
}

export default HomePageCarousel;
