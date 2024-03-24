import { ArtWrapper } from "./Art.styled";

const Art = ({ image, index }) => {
  return (
    <ArtWrapper key={index}>
      <img src={image} alt={`Art ${index + 1}`} />
    </ArtWrapper>
  );
};

export default Art;
