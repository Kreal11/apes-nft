import { useMediaQuery } from "react-responsive";
import aboutApeMobile1x from "../../assets/images/about/aboutApe_mobile1x.png";
import aboutApeMobile2x from "../../assets/images/about/aboutApe_mobile2x.png";
import aboutApeTablet1x from "../../assets/images/about/aboutApe_tablet1x.png";
import aboutApeTablet2x from "../../assets/images/about/aboutApe_tablet2x.png";
import aboutApeDesktop1x from "../../assets/images/about/aboutApe_desktop1x.png";
import aboutApeDesktop2x from "../../assets/images/about/aboutApe_desktop2x.png";
import {
  AboutBlock,
  AboutHeader,
  AboutSection,
  Banner,
  FirstTextBlock,
  SecondTextBlock,
} from "./About.styled";

import sprite from "/sprite.svg";
import Container from "../container/Container";

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
    <AboutSection id="#about">
      <Container $about="about">
        {isMobile && (
          <>
            <AboutHeader>
              a Story that started with{" "}
              <span>
                one simple
                <br />
                ape
              </span>
            </AboutHeader>
            <FirstTextBlock>
              WHO GOT <br />
              FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA
              OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
            </FirstTextBlock>
            <SecondTextBlock>
              <svg>
                <use xlinkHref={`${sprite}#icon-cross`} />
              </svg>
              <p>
                EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY.
                ARTS ARE RANDOMLY GENERATED BY USERS
              </p>
            </SecondTextBlock>
            <picture>
              <source
                srcSet={`${aboutApeMobile1x} 1x, ${aboutApeMobile2x} 2x`}
              />
              <img src={aboutApeMobile1x} alt="Ape" />
            </picture>
          </>
        )}
        {(isTablet || isDesktop) && (
          <>
            <AboutBlock>
              <AboutHeader>
                a Story that started with{" "}
                <span>
                  one <br />
                  simple ape
                </span>
              </AboutHeader>
              <SecondTextBlock>
                <svg>
                  <use xlinkHref={`${sprite}#icon-cross`} />
                </svg>
                <p>
                  EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY.
                  ARTS ARE RANDOMLY GENERATED BY USERS
                </p>
              </SecondTextBlock>
            </AboutBlock>
            <AboutBlock>
              <FirstTextBlock>
                WHO GOT FED UP WITH BORING <br />
                AND HYPOCRITIC COMMONPLACE <br />
                THIS IS HOW THE IDEA OF <br />
                ESCAPING AND DYNAMIC <br />
                JOURNEY ON THE <br />
                YACHT
              </FirstTextBlock>

              {isTablet && (
                <picture>
                  <source
                    srcSet={`${aboutApeTablet1x} 1x, ${aboutApeTablet2x} 2x`}
                  />
                  <img src={aboutApeTablet1x} alt="Ape" />
                </picture>
              )}
              {isDesktop && (
                <picture>
                  <source
                    srcSet={`${aboutApeDesktop1x} 1x, ${aboutApeDesktop2x} 2x`}
                  />
                  <img src={aboutApeDesktop1x} alt="Ape" />
                </picture>
              )}
            </AboutBlock>
          </>
        )}
      </Container>
      <Banner>
        <div>
          <>
            <svg>
              <use xlinkHref={`${sprite}#icon-cross`} />
            </svg>
            <p>Destroy stereotypes</p>
            <svg>
              <use xlinkHref={`${sprite}#icon-cross`} />
            </svg>
            <p>HAVE NO LIMITS</p>
            <svg>
              <use xlinkHref={`${sprite}#icon-cross`} />
            </svg>
            <p>Break rules</p>
          </>
        </div>
      </Banner>
    </AboutSection>
  );
};

export default About;
