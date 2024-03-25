import { useMediaQuery } from "react-responsive";
import { useModal } from "../../hooks/useModal";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Modal from "../modal/Modal";
import SocialLinks from "../socialLinks/SocialLinks";
import {
  Button,
  HeaderTag,
  LogoNavLink,
  MenuAndSocialsWrapper,
} from "./Header.styled";
import sprite from "/sprite.svg";
import BurgerNav from "../burgerNav/BurgerNav";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <>
      <HeaderTag>
        <LogoNavLink to="/">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-ape`} />
          </svg>
        </LogoNavLink>
        <MenuAndSocialsWrapper>
          {isOpen && isTabletOrDesktop ? (
            <Button onClick={closeModal} $isOpen={isOpen}>
              Close
            </Button>
          ) : (
            <Button onClick={openModal}>Menu</Button>
          )}
          <SocialLinks />
          {isOpen && isTabletOrDesktop && <BurgerNav closeModal={closeModal} />}
        </MenuAndSocialsWrapper>
      </HeaderTag>
      {isOpen && isMobile && (
        <Modal closeModal={closeModal}>
          <BurgerMenu closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
