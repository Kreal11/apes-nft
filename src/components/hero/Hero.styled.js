import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -13px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }

  picture {
    display: flex;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.2));

    @media screen and (min-width: ${tablet}) {
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 206px;
    }

    @media screen and (min-width: ${desktop}) {
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 349px;
    }
  }

  h1 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 44px;
    font-weight: 900;
    font-style: normal;
    line-height: 1;
    color: var(--primary-color);
    letter-spacing: 0.01em;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      margin-bottom: 8px;
    }

    @media screen and (min-width: ${tablet}) {
      font-size: 92px;
      word-spacing: 1.7em;
      position: absolute;
      z-index: 1;
      bottom: 170px;
      left: 70px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 164px;
      line-height: 1;
      bottom: 276px;
      left: 96px;
      word-spacing: 1.5em;
    }
  }

  h2 {
    font-family: "Biro Script Plus";
    font-size: 16px;
    font-weight: 900;
    line-height: 1.7;
    color: var(--primary-color);

    @media screen and (max-width: 767px) {
      h2:last-of-type {
        margin-bottom: 6px;
      }
    }

    @media screen and (min-width: ${tablet}) {
      font-size: 20px;
      line-height: 1.65;
    }
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 12px 0;
    margin-top: -2px;
    opacity: 90%;
    text-transform: uppercase;
    font-family: "Right Grotesk Compact", monospace;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.19;
    color: var(--primary-color);
    background-color: var(--bg-light-grey-color);
    border-radius: 8px;
    border: none;
    outline: none;
    position: relative;

    @media screen and (max-width: 767px) {
      margin-bottom: 12px;
      min-width: 216px;
    }

    @media screen and (min-width: ${tablet}) {
      width: 100%;
      border-radius: 12px;

      &:hover {
        color: var(--default-color);
      }
    }

    @media screen and (min-width: ${desktop}) {
      padding: 16px 0px 20px 0px;
      font-size: 28px;
      line-height: 1.2;
      min-width: 337px;
    }
  }

  h3 {
    font-family: "Messina Sans Mono", monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.17;
    text-align: center;
    text-transform: uppercase;
    max-width: 217px;
    margin: 0 auto;
    color: var(--primary-color);

    @media screen and (min-width: ${tablet}) {
      max-width: 190px;
    }

    @media screen and (min-width: ${desktop}) {
      max-width: 337px;
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;

export const HeroHeadersWrapper = styled.div`
  position: absolute;
  left: 70px;
  bottom: 123px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 108px;
  text-align: left;

  @media screen and (min-width: ${desktop}) {
    gap: 194px;
    left: 96px;
    bottom: 220px;

    h2 {
      &:last-of-type {
        margin-left: 160px;
      }
    }
  }
`;

export const HeroDescrWrapper = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 35px;
  right: 72px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${desktop}) {
    right: 140px;
    bottom: 100px;
  }
`;

export const Span1 = styled.span`
  display: block;
  text-align: right;
`;
export const Span2 = styled.span`
  display: block;
  text-align: justify;
`;
export const Span3 = styled.span`
  display: block;
  text-align: left;
`;
