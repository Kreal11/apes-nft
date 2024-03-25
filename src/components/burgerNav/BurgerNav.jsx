import { BurgerNavLink, Nav } from "./BurgerNav.styled";
import PropTypes from "prop-types";

const BurgerNav = ({ closeModal }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      closeModal();
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  };

  const handleChooseSection = (event) => {
    if (event.target.tagName === "A") {
      const sectionId = event.target.getAttribute("section");
      handleScrollToSection(sectionId);
    }
  };

  return (
    <Nav onClick={handleChooseSection}>
      <BurgerNavLink section="#about">About</BurgerNavLink>
      <BurgerNavLink section="#mind-map">M-Map</BurgerNavLink>
      <BurgerNavLink section="#faq">FAQ</BurgerNavLink>
      <BurgerNavLink section="#arts">Arts</BurgerNavLink>
      <BurgerNavLink section="#mint">Mint</BurgerNavLink>
    </Nav>
  );
};

export default BurgerNav;

BurgerNav.propTypes = {
  closeModal: PropTypes.func,
};
