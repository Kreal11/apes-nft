import styled from "styled-components";

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 12px;
  min-height: 242px;
  max-width: 216px;
  margin: 0 auto;
  margin-bottom: 24px;
  border-radius: 16px;
  position: relative;

  background-color: var(--primary-color);
  ${({ $lastEl }) => $lastEl === 3 && `background-color: var(--accent-color);`}

  p {
    font-family: "Messina Sans Mono", monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.7;
    text-align: left;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    text-transform: uppercase;
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
  }
`;
