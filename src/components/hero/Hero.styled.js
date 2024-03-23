import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 216px;
  margin: 0 auto;
  margin-top: -13px;
  position: relative;

  picture {
    display: flex;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.2));
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
    margin-bottom: 8px;
  }

  h2 {
    font-family: "Biro Script Plus";
    font-size: 16px;
    font-weight: 900;
    line-height: 1.7;
    color: var(--primary-color);
  }

  h2:last-of-type {
    margin-bottom: 6px;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 12px 0;
    margin-top: -2px;
    opacity: 90%;
    margin-bottom: 12px;
    text-transform: uppercase;
    width: 100%;

    font-family: "Right Grotesk Compact", monospace;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.19;
    color: black;
    background-color: transparent;
    border-radius: 8px;
    border: none;
    outline: none;
    position: relative;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-light-grey-color);
    z-index: -1;
    border-radius: 8px;
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
  }
`;
