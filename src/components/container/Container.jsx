import PropTypes from "prop-types";
import { StyledContainer } from "./Container.styled";

const Container = ({ children, $about }) => {
  return <StyledContainer $about={$about}>{children}</StyledContainer>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  $about: PropTypes.string,
};
