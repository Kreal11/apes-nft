import apeHeroMobile1x from "../../assets/images/hero/heroApe_mobile1x.png";
import apeHeroMobile2x from "../../assets/images/hero/heroApe_mobile2x.png";
import apeHeroTablet1x from "../../assets/images/hero/heroApe_tablet1x.png";
import apeHeroTablet2x from "../../assets/images/hero/heroApe_tablet2x.png";
import apeHeroDesktop1x from "../../assets/images/hero/heroApe_desktop1x.png";
import apeHeroDesktop2x from "../../assets/images/hero/heroApe_desktop2x.png";
import { useMediaQuery } from "react-responsive";
import {
  HeroDescrWrapper,
  HeroHeadersWrapper,
  HeroWrapper,
  Span1,
  Span2,
  Span3,
} from "./Hero.styled";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const scrollToMintSection = () => {
    const section = document.getElementById("#mind-map");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <HeroWrapper>
      {isMobile && (
        <>
          <h2>diD yOu seE iT ?</h2>
          <h1>Yacht Apes</h1>
          <h2>Apes aRe eveRywhere</h2>

          <picture>
            <source srcSet={`${apeHeroMobile1x} 1x, ${apeHeroMobile2x} 2x`} />
            <img src={apeHeroMobile1x} alt="Ape" />
          </picture>
          <button onClick={scrollToMintSection}>Meet Apes</button>
          <h3>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </h3>
        </>
      )}

      {isTablet && (
        <>
          <HeroHeadersWrapper>
            <h2>diD yOu seE iT ?</h2>
            <h2>Apes aRe eveRywhere</h2>
          </HeroHeadersWrapper>
          <h1>Yacht Apes</h1>
          <picture>
            <source srcSet={`${apeHeroTablet1x} 1x, ${apeHeroTablet2x} 2x`} />
            <img src={apeHeroTablet1x} alt="Ape" />
          </picture>
          <HeroDescrWrapper>
            <h3>
              <Span1>
                Yacht Ape is a <br />
              </Span1>
              <Span2>collection of unique digital apes that you can</Span2>
              <Span3>own in NFT format</Span3>
            </h3>
            <button onClick={scrollToMintSection}>Meet Apes</button>
          </HeroDescrWrapper>
        </>
      )}

      {isDesktop && (
        <picture>
          <source srcSet={`${apeHeroDesktop1x} 1x, ${apeHeroDesktop2x} 2x`} />
          <img src={apeHeroDesktop1x} alt="Ape" />
        </picture>
      )}
    </HeroWrapper>
  );
};

export default Hero;
