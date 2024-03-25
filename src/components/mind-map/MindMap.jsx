import { useEffect, useRef, useState } from "react";
import {
  MindHeader,
  MindMapSection,
  SliderBtnWrapper,
  TabletMindList,
} from "./MindMap.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import MindSlide from "../slide/Slide";

const MindMap = () => {
  const [slidesData, setSlidesData] = useState([]);
  const sliderRef = useRef(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useEffect(() => {
    fetch("/data/mindData.json")
      .then((response) => response.json())
      .then((data) => setSlidesData(data))
      .catch((error) => console.error("Error fetching slides data:", error));
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
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
    <MindMapSection id="#mind-map">
      <MindHeader>Mind map</MindHeader>
      {isMobile && slidesData.length && (
        <>
          <Slider {...settings} ref={sliderRef}>
            {slidesData?.map((slide, index) => (
              <MindSlide key={index} {...slide} lastEl={index} />
            ))}
          </Slider>
          <SliderBtnWrapper>
            <button onClick={goToPrevSlide}>Prev</button>
            <button onClick={goToNextSlide}>Next</button>
          </SliderBtnWrapper>
        </>
      )}
      {isTablet && slidesData.length && (
        <TabletMindList>
          {slidesData?.map((slide, index) => (
            <MindSlide key={index} {...slide} lastEl={index} />
          ))}
        </TabletMindList>
      )}
    </MindMapSection>
  );
};

export default MindMap;
