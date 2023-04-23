import React, {useState} from "react";
import {
  Row, 
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    title: "QR Generator",
    desc:"QR Generator is a convenient online tool that allows users to easily generate QR codes without any software installation. Users can access the app through a web browser on their desktop computers, laptops, tablets, or smartphones.",
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    key: 1,
  },
  {
    title: "Manga Reader",
    desc:"Introducing Manga Reader - the ultimate manga reader app for manga enthusiasts! Dive into a world of captivating stories, vibrant artwork, and immersive storytelling with Manga Reader. ",
    src: "https://play-lh.googleusercontent.com/puWWibG74VwUtLVsndVAggTBfEIsfgmql0wl2dyKTRgokQrpSU8qwGDAndVL7Yfk5w",
    altText: "Slide 2",
    key: 2,
  },
  {
    title: "Chat App",
    desc:"The Chat App is a dynamic and convenient communication tool that brings real-time chat functionality to your website. With this chat app, visitors can engage in live conversations with your team, ask questions, seek assistance, and receive prompt responses.",
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    key: 3,
  },
];

const Services = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="carousel-item"
      >
        <Row>
          <Col lg={5}>
              <h2 className="mb-4 font-weight-normal line-height-1_4">{item.title}</h2>
              <p className="text-muted mb-4 pb-2">{item.desc}</p>
              <a href="#" className="btn btn-warning">
                Learn More<span className="ml-2 right-icon">&#8594;</span>
              </a>
          </Col>
          <Col lg={5}>
            <img src={item.src} alt={item.altText}/>
          </Col>
          
        </Row>
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <section id="service" className="section position-relative">
    <h1 className="text-center">Our Services</h1>
      
    <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
          className="px-5"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
    </section>
  );
};
export default Services;
