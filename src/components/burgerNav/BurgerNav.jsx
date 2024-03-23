import { BurgerNavLink, Nav } from "./BurgerNav.styled";

const BurgerNav = ({ closeModal }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      closeModal();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChooseSection = (event) => {
    if (event.target.tagName === "A") {
      const sectionId = event.target.getAttribute("href");
      handleScrollToSection(sectionId);
    }
  };

  return (
    <Nav onClick={handleChooseSection}>
      <BurgerNavLink href="about">About</BurgerNavLink>
      <BurgerNavLink href="m-map">M-Map</BurgerNavLink>
      <BurgerNavLink href="faq">FAQ</BurgerNavLink>
      <BurgerNavLink href="arts">Arts</BurgerNavLink>
      <BurgerNavLink href="mint">Mint</BurgerNavLink>
    </Nav>
  );
};

export default BurgerNav;
