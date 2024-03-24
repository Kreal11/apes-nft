import { SlideWrapper } from "./Slide.styled";
import sprite from "/sprite.svg";

const Slide = ({ title, content, lastEl }) => {
  return (
    <SlideWrapper $lastEl={lastEl}>
      {lastEl === 3 ? (
        <a href="https://miro.com/mind-map/" target="_blank">
          <svg>
            <use xlinkHref={`${sprite}#icon-up-right-arrow`} />
          </svg>
          <p>{content}</p>
          <h3>{title}</h3>
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

export default Slide;