import { BurgerNavLink, Nav } from "./BurgerNav.styled";

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
      const sectionId = event.target.getAttribute("id");
      handleScrollToSection(sectionId);
    }
  };

  return (
    <Nav onClick={handleChooseSection}>
      <BurgerNavLink id="#about">About</BurgerNavLink>
      <BurgerNavLink id="#mind-map">M-Map</BurgerNavLink>
      <BurgerNavLink id="#faq">FAQ</BurgerNavLink>
      <BurgerNavLink id="#arts">Arts</BurgerNavLink>
      <BurgerNavLink id="#mint">Mint</BurgerNavLink>
    </Nav>
  );
};

export default BurgerNav;
