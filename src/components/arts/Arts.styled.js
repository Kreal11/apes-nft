import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const ArtsSection = styled.section`
  margin-bottom: 60px;

  h2 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 44px;
    font-weight: 900;
    line-height: 0.9;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (min-width: ${tablet}) {
      font-size: 80px;
      line-height: 1;
    }
  }
`;

export const SliderWrapper = styled.div`
  max-width: 616px;
  margin: 0 auto;
`;
