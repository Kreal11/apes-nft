import BurgerNav from "../burgerNav/BurgerNav";
import { LogoNavLink, MenuAndSocialsWrapper } from "../header/Header.styled";
import SocialLinks from "../socialLinks/SocialLinks";
import { BurgerHeaderWrapper } from "./BurgerMenu.styled";
import sprite from "/sprite.svg";

const BurgerMenu = ({ closeModal }) => {
  return (
    <>
      <BurgerHeaderWrapper>
        <LogoNavLink $burger="burger" to="/">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-ape`} />
          </svg>
        </LogoNavLink>
        <MenuAndSocialsWrapper $burger="burger">
          <button onClick={closeModal}>Close</button>
          <SocialLinks burger="burger" />
        </MenuAndSocialsWrapper>
      </BurgerHeaderWrapper>
      <BurgerNav />
    </>
  );
};

export default BurgerMenu;
