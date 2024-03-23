import styled, { keyframes } from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  margin: 0 auto;
  margin-bottom: 12px;

  span {
    color: var(--accent-color);
  }
`;

export const FirstTextBlock = styled.p`
  font-family: "Messina Sans Mono", monospace;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: right;
  max-width: 216px;
  margin: 0 auto;
  margin-bottom: 36px;
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

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
  }
`;

const moveLeft = keyframes`
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

  div {
    animation: ${moveLeft} 10s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    max-width: 957px;

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
