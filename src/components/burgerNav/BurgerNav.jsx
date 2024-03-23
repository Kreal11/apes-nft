import { BurgerNavLink, Nav } from "./BurgerNav.styled";

const BurgerNav = () => {
  return (
    <Nav>
      <BurgerNavLink>About</BurgerNavLink>
      <BurgerNavLink>M-Map</BurgerNavLink>
      <BurgerNavLink>FAQ</BurgerNavLink>
      <BurgerNavLink>Arts</BurgerNavLink>
      <BurgerNavLink>Mint</BurgerNavLink>
    </Nav>
  );
};

export default BurgerNav;
