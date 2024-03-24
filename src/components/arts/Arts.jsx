import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArtsSection } from "./Arts.styled";
import { SliderBtnWrapper } from "../mind-map/MindMap.styled";
import { useRef } from "react";
import images from "./images";
import Art from "../art/Art";

const Arts = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <ArtsSection id="#arts">
      <h2>Collection</h2>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Art image={image} key={index} index={index} />
        ))}
      </Slider>
      <SliderBtnWrapper>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </SliderBtnWrapper>
    </ArtsSection>
  );
};

export default Arts;
