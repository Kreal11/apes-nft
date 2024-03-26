import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    margin-bottom: 80px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }

  picture {
    display: flex;
    justify-content: center;
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
    margin-bottom: 16px;
  }

  span {
    color: var(--accent-color);
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 60px;
    max-width: 269px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 120px;
    max-width: 538px;
  }
`;

export const FirstTextBlock = styled.p`
  font-family: "Messina Sans Mono", monospace;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: right;
  max-width: 216px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${tablet}) {
    max-width: 275px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 24px;
    line-height: 1.2;
    max-width: 409px;
  }
`;

export const SecondTextBlock = styled.div`
  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  max-width: 216px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 40px;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;

    @media screen and (min-width: ${tablet}) {
      margin-bottom: 24px;
    }

    @media screen and (min-width: ${desktop}) {
      width: 36px;
      height: 36px;
      margin-bottom: 36px;
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
    line-height: 1.19;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.2;
    max-width: 417px;
  }
`;

const moveLeftOne = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Banner = styled.div`
  background-color: var(--accent-color);
  padding-top: 6px;
  padding-bottom: 9px;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    gap: 24px;
    min-width: 957px;
    white-space: nowrap;
    animation: ${moveLeftOne} 6s linear infinite;

    @media screen and (min-width: ${tablet}) {
      animation: ${moveLeftOne} 10s linear infinite;
    }

    @media screen and (min-width: ${tablet}) {
      min-width: 1582px;
    }

    p {
      text-transform: uppercase;
      font-family: "Right Grotesk Compact", monospace;
      font-size: 36px;
      font-weight: 900;
      line-height: 1;

      @media screen and (min-width: ${desktop}) {
        font-size: 64px;
      }
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
    display: inline-flex;
    flex-direction: column;
    gap: 68px;
    justify-content: center;

    &:last-of-type {
      align-items: flex-end;
      gap: 0px;

      @media screen and (min-width: ${desktop}) {
        gap: 24px;
      }
    }
  }

  @media screen and (min-width: ${desktop}) {
    gap: 56px;
  }
`;
