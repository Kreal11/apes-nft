import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArtsSection, SliderWrapper } from "./Arts.styled";
import { SliderBtnWrapper } from "../mind-map/MindMap.styled";
import { useRef } from "react";
import images from "./images";
import Art from "../art/Art";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Arts = () => {
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

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: (() => {
      if (isMobile) return 1;
      if (isTablet) return 2;
      return 4;
    })(),
    slidesToScroll: (() => {
      if (isMobile) return 1;
      if (isTablet) return 2;
      return 4;
    })(),
  };

  const goToNextSlide = () => {
    const currentIndex = sliderRef.current.innerSlider.state.currentSlide;
    const totalSlides = sliderRef.current.innerSlider.state.slideCount;
    const slidesToShow = sliderRef.current.innerSlider.props.slidesToShow;

    const lastSlideInGroup = currentIndex + slidesToShow;

    if (lastSlideInGroup < totalSlides) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <ArtsSection id="#arts">
      <h2>Collection</h2>
      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <Art image={image} key={index} $index={index} />
          ))}
        </Slider>
      </SliderWrapper>
      <SliderBtnWrapper>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </SliderBtnWrapper>
    </ArtsSection>
  );
};

export default Arts;

const CustomSlider = styled(Slider)`
  .slick-slide:not(:first-child) {
    margin-left: 24px; /* Расстояние между видимыми слайдами */
  }
`;
