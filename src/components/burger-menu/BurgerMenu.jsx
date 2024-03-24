import BurgerNav from "../burgerNav/BurgerNav";
import { LogoNavLink, MenuAndSocialsWrapper } from "../header/Header.styled";
import SocialLinks from "../socialLinks/SocialLinks";
import { BurgerHeaderWrapper, RightsReserved } from "./BurgerMenu.styled";
import sprite from "/sprite.svg";

const BurgerMenu = ({ closeModal }) => {
  return (
    <>
      <BurgerHeaderWrapper>
        <LogoNavLink $burger="burger" to="/" onClick={closeModal}>
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-ape`} />
          </svg>
        </LogoNavLink>
        <MenuAndSocialsWrapper $burger="burger">
          <button onClick={closeModal}>Close</button>
          <SocialLinks burger="burger" />
        </MenuAndSocialsWrapper>
      </BurgerHeaderWrapper>
      <BurgerNav closeModal={closeModal} />
      <RightsReserved>© Yacht ape 2024 all rights reserved</RightsReserved>
    </>
  );
};

export default BurgerMenu;
