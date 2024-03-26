import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const ArtsSection = styled.section`
  margin-bottom: 60px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }

  h2 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 44px;
    font-weight: 900;
    line-height: 0.9;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (min-width: ${tablet}) {
      margin-bottom: 40px;
      font-size: 80px;
      line-height: 1;
    }

    @media screen and (min-width: ${desktop}) {
      margin-bottom: 80px;
      font-size: 160px;
    }
  }
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: ${desktop}) {
    max-width: 1050px;
  }
`;
