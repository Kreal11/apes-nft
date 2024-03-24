import { ArtWrapper } from "./Art.styled";
import PropTypes from "prop-types";

const Art = ({ image, index }) => {
  return (
    <ArtWrapper key={index}>
      <img src={image} alt={`Art ${index + 1}`} />
    </ArtWrapper>
  );
};

export default Art;

Art.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
