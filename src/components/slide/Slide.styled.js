import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 12px;
  min-height: 242px;
  border-radius: 16px;
  position: relative;

  background-color: var(--primary-color);
  ${({ $lastEl }) => $lastEl === 3 && `background-color: var(--accent-color);`}

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 24px;
    max-width: 216px;
  }

  @media screen and (min-width: ${tablet}) {
    border-radius: 24px;
    padding: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    min-height: 480px;
  }

  p {
    font-family: "Messina Sans Mono", monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.17;
    text-align: left;
    text-transform: uppercase;

    @media screen and (min-width: ${tablet}) {
      max-width: 128px;
      margin-left: auto;
    }

    @media screen and (min-width: ${desktop}) {
      max-width: 228px;
      font-size: 24px;
      line-height: 1.2;
      min-height: 240px;
    }
  }

  h3 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    text-transform: uppercase;

    @media screen and (min-width: ${desktop}) {
      font-size: 64px;
      line-height: 1;
    }
  }

  a {
    height: 194px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: var(--default-color);
  }

  svg {
    position: absolute;
    right: 12px;
    width: 48px;
    height: 48px;

    @media screen and (min-width: ${desktop}) {
      width: 64px;
      height: 64px;
    }
  }
`;
