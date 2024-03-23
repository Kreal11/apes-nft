import { SocialLinksList } from "./SocialLinks.styled";
import sprite from "/sprite.svg";

const SocialLinks = ({ burger }) => {
  return (
    <SocialLinksList $burger={burger}>
      <li>
        <a href="">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-discord`} />
          </svg>
        </a>
      </li>
      <li>
        <a href="">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-ship`} />
          </svg>
        </a>
      </li>
      <li>
        <a href="">
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-x`} />
          </svg>
        </a>
      </li>
    </SocialLinksList>
  );
};

export default SocialLinks;
