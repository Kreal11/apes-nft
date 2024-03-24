import { useEffect, useRef, useState } from "react";
import { MindHeader, MindMapSection, SliderBtnWrapper } from "./MindMap.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../slide/Slide";

const MindMap = () => {
  const [slidesData, setSlidesData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/src/data/mindData.json")
      .then((response) => response.json())
      .then((data) => setSlidesData(data))
      .catch((error) => console.error("Error fetching slides data:", error));
  }, []);

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
    <MindMapSection>
      <MindHeader>Mind map</MindHeader>
      {slidesData.length > 0 && (
        <Slider {...settings} ref={sliderRef}>
          {slidesData?.map((slide, index) => (
            <Slide key={index} {...slide} lastEl={index} />
          ))}
        </Slider>
      )}
      <SliderBtnWrapper>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </SliderBtnWrapper>
    </MindMapSection>
  );
};

export default MindMap;
