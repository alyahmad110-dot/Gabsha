import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactBar from "./ContactBar.jsx";
import CollapsibleExample from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import Card from "./Components/Cards.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Vision from "./Components/Vision.jsx";
import Goals from "./Components/Goals.jsx";
import Goalcard from "./Components/GoalCard.jsx";
import MessageSec from "./Components/MessageSec.jsx";
import ServiceSection from "./Components/Services.jsx";
import VisionCard from "./Components/VisionCards.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import CopyRight from "./Components/CopyRight.jsx";
import Footer from "./Components/Footer.jsx";


import gCard1 from "../public/gcard1.png";
import gCard2 from "../public/gcard2.png";
import gCard3 from "../public/gcard3.png";
import gCard4 from "../public/gcard4.png";


import cardicon1 from "../public/cardicon1.png";
import cardicon2 from "../public/cardicon2.png";
import cardicon3 from "../public/cardicon3.png";
import cardicon4 from "../public/cardicon4.png";


import scard1 from "../public/scard1.png";
import scard2 from "../public/scard2.png";
import scard3 from "../public/scard3.png";
import scard4 from "../public/scard4.png";




function App() {
  const cards = [
    {
      id: "01",
      title: "Event Planning",
      description:
        "Seamless event management from concept to execution with precision and creativity.",
      icon: cardicon1,
    },
    {
      id: "02",
      title: "Training Programs",
      description:
        "Empowering individuals with certified, high-quality vocational and administrative courses.",
      icon: cardicon2,
    },
    {
      id: "03",
      title: "Creative Advertising",
      description:
        "Delivering compelling messages through impactful media, design, and strategy.",
      icon: cardicon3,
    },
    {
      id: "04",
      title: "Social Impact Focus",
      description:
        "Creating meaningful connections through community-focused initiatives and campaigns.",
      icon: cardicon4,
    },
  ];

  const Gcard = [
    {
      img: gcard1,
      heading: "  UAE Vision 2071",
      title:
        "Keeping pace with the renaissance witnessed by the country by providing high-quality services in accordance with the latest international...",
      btn: "Read More",
    },

    {
      img: gcard2,
      heading: "  UAE Vision 2071",
      title:
        "Keeping pace with the renaissance witnessed by the country by providing high-quality services in accordance with the latest international...",
      btn: "Read More",
    },

    {
      img: gcard3,
      heading: "  UAE Vision 2071",
      title:
        "Keeping pace with the renaissance witnessed by the country by providing high-quality services in accordance with the latest international...",
      btn: "Read More",
    },

    {
      img: gcard4,
      heading: "  UAE Vision 2071",
      title:
        "Keeping pace with the renaissance witnessed by the country by providing high-quality services in accordance with the latest international...",
      btn: "Read More",
    },
  ];



  const Vcard = [
    {
icon: scard1, 
heading :" Organizing Events and Conferences" ,

discription : "Ghabsha works with high professionalism in the exhibitions, conferences and events using a new and unique approach to managing events in the UAE and abroad.",
button : "Read More",
    },


    {
icon: scard2, 
heading :" Vocational and Administrative Training" ,

discription : "Ghabsha carries out many different and specialized training courses, professional diplomas accredited locally and internationally, and distinguished workshops of high-quality service to clients to...",
button : "Read More",
    },
    
    
     {
icon: scard3, 
heading : "Advertising Services" ,

discription : "Our team adopts an approach to developing effective strategies and rich content that ensures the delivery of key messages to the target audience in an interactive way, using creative tools such as graphic...",
button : "Read More",
    },


     {
icon: scard4, 
heading :" Social Responsibility" ,

discription : "Ghabsha works with high professionalism in the management and organization of exhibitions, conferences and events using a new and unique approach to managing events in the UAE and abroad.",
button : "Read More",
    },
  ];

  return (
    <>
      <ContactBar />
      <CollapsibleExample />
      <Banner />

      <div 
        className="container cards"
      >
        <div  className="row">
          {cards.map((card) => (
            <div className="col-lg-3 col-md-6 col-12" key={card.id}>
              <Card
                cardIcon={card.icon}
                cardNum={card.id}
                cardTitle={card.title}
                cardDesc={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
      <Vision />
      <Goals />

      <div className="container">
        <div className="row">
          {Gcard.map((item) => (
            <div className="col-lg-3 col-md-6 col-12">
              <Goalcard
                imgPath={item.img}
                heading={item.heading}
                title={item.title}
                btn={item.btn}
              />
            </div>
          ))}
        </div>
      </div>

      <MessageSec />
      <ServiceSection />
<div className="container">
  <div className="row">
          {Vcard.map((vcard) => (

    <div className="col-lg-3 col-md-6 col-12">
      

  
      <VisionCard 
      icon = {vcard.icon}
      heading = {vcard.heading}
      discription = {vcard.discription}
      button = {vcard.button}
      
      />
      


    </div>
    ))}

  </div>

</div>
      
      <ContactUs />
      <Footer />

      <CopyRight />
    </>
  );
}

export default App;
