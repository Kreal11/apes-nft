import styled from "styled-components";

export const MindHeader = styled.h2`
  font-family: "Right Grotesk Compact", monospace;
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
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
    line-height: 1;
  }
`;

export const MindMapSection = styled.section`
  margin-bottom: 60px;
`;
