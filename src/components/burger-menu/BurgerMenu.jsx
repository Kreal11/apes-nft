import { MenuAndSocialsWrapper } from "../header/Header.styled";
import SocialLinks from "../socialLinks/SocialLinks";

const BurgerMenu = ({ closeModal }) => {
  return (
    <div>
      <MenuAndSocialsWrapper $burger="burger">
        <button onClick={closeModal}>Close</button>
        <SocialLinks burger="burger" />
      </MenuAndSocialsWrapper>
    </div>
  );
};

export default BurgerMenu;
