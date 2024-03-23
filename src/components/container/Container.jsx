import { StyledContainer } from "./Container.styled";

const Container = ({ children, $about }) => {
  return <StyledContainer $about={$about}>{children}</StyledContainer>;
};

export default Container;
