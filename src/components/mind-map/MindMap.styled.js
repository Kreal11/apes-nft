import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const MindHeader = styled.h2`
  font-family: "Right Grotesk Compact", monospace;
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: ${tablet}) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

export const SliderBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  max-width: 216px;
  margin: 0 auto;

  button {
    border: none;
    outline: none;
    background-color: transparent;

    font-family: "Biro Script Plus", monospace;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
  }
`;

export const MindMapSection = styled.section`
  margin-bottom: 60px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 80px;
  }
`;

export const TabletMindList = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, minmax(0, 284px));
  justify-content: center;
  gap: 24px;
`;
