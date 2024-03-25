import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;

  @media screen and (min-width: ${tablet}) {
    position: relative;
  }

  picture {
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${tablet}) {
      position: absolute;
      bottom: 55px;
      right: 80px;
    }
  }
`;

export const AboutHeader = styled.h2`
  font-family: "Right Grotesk Compact", monospace;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  max-width: 216px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 12px;
  }

  span {
    color: var(--accent-color);
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 60px;
    max-width: 269px;
  }
`;

export const FirstTextBlock = styled.p`
  font-family: "Messina Sans Mono", monospace;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: right;
  max-width: 216px;
  margin-bottom: 36px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }

  @media screen and (min-width: ${tablet}) {
    max-width: 275px;
  }
`;

export const SecondTextBlock = styled.div`
  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  max-width: 216px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;

    @media screen and (min-width: ${tablet}) {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    max-width: 269px;
    margin-bottom: 36px;
  }
`;

export const Banner = styled.div`
  background-color: var(--accent-color);
  padding-top: 6px;
  padding-bottom: 9px;
  position: relative;

  div {
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    p {
      font-family: "Right Grotesk Compact", monospace;
      font-size: 36px;
      font-weight: 900;
      line-height: 1;
    }
  }

  svg {
    margin-top: 4px;
    width: 36px;
    height: 36px;
  }
`;

export const AboutBlock = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    gap: 48px;
    justify-content: center;

    &:first-of-type {
      margin-bottom: 68px;
    }

    &:last-of-type {
      max-width: 425px;
    }
  }
`;
