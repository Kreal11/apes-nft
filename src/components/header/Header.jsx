import BurgerMenu from "../burger-menu/BurgerMenu";
import SocialLinks from "../socialLinks/SocialLinks";
import { HeaderTag, LogoNavLink, MenuAndSocialsWrapper } from "./Header.styled";
import sprite from "/sprite.svg";

const Header = () => {
  return (
    <HeaderTag>
      <LogoNavLink to="/">
        <svg>
          <use xlinkHref={`${sprite}#icon-logo-ape`} />
        </svg>
      </LogoNavLink>
      <MenuAndSocialsWrapper>
        <button>Menu</button>
        {/* <BurgerMenu /> */}
        <SocialLinks />
      </MenuAndSocialsWrapper>
    </HeaderTag>
  );
};

export default Header;
