import { useMediaQuery } from "react-responsive";
import aboutApeMobile1x from "../../assets/images/about/aboutApe_mobile1x.png";
import aboutApeMobile2x from "../../assets/images/about/aboutApe_mobile2x.png";
import aboutApeTablet1x from "../../assets/images/about/aboutApe_tablet1x.png";
import aboutApeTablet2x from "../../assets/images/about/aboutApe_tablet2x.png";
import aboutApeDesktop1x from "../../assets/images/about/aboutApe_desktop1x.png";
import aboutApeDesktop2x from "../../assets/images/about/aboutApe_desktop2x.png";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <div>
      <h2></h2>
      <p></p>
      <p></p>

      {isMobile && (
        <picture>
          <source srcSet={`${aboutApeMobile1x} 1x, ${aboutApeMobile2x} 2x`} />
          <img src={aboutApeMobile1x} alt="Ape" />
        </picture>
      )}

      {isTablet && (
        <picture>
          <source srcSet={`${aboutApeTablet1x} 1x, ${aboutApeTablet2x} 2x`} />
          <img src={aboutApeTablet1x} alt="Ape" />
        </picture>
      )}

      {isDesktop && (
        <picture>
          <source srcSet={`${aboutApeDesktop1x} 1x, ${aboutApeDesktop2x} 2x`} />
          <img src={aboutApeDesktop1x} alt="Ape" />
        </picture>
      )}
    </div>
  );
};

export default About;
