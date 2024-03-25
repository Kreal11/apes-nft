import { useMediaQuery } from "react-responsive";
import { SlideWrapper } from "./Slide.styled";
import sprite from "/sprite.svg";
import PropTypes from "prop-types";

const MindSlide = ({ title, content, lastEl }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });

  return (
    <SlideWrapper $lastEl={lastEl}>
      {lastEl === 3 ? (
        <a href="https://miro.com/mind-map/" target="_blank">
          <svg>
            <use xlinkHref={`${sprite}#icon-up-right-arrow`} />
          </svg>
          <p>{content}</p>
          {isMobile && <h3>Learn more in mind map</h3>}
          {isTablet && (
            <h3>
              Learn <br />
              more <br />
              in mind map
            </h3>
          )}
        </a>
      ) : (
        <>
          <p>{content}</p>
          <h3>{title}</h3>
        </>
      )}
    </SlideWrapper>
  );
};

export default MindSlide;

MindSlide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  lastEl: PropTypes.number.isRequired,
};
