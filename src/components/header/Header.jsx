import { useModal } from "../../hooks/useModal";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Modal from "../modal/Modal";
import SocialLinks from "../socialLinks/SocialLinks";
import { HeaderTag, LogoNavLink, MenuAndSocialsWrapper } from "./Header.styled";
import sprite from "/sprite.svg";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <HeaderTag>
        <LogoNavLink to="/">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-ape`} />
          </svg>
        </LogoNavLink>
        <MenuAndSocialsWrapper>
          <button onClick={openModal}>Menu</button>
          <SocialLinks />
        </MenuAndSocialsWrapper>
      </HeaderTag>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <BurgerMenu closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
