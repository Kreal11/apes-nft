import styled from "styled-components";

export const ContactUsSection = styled.section`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 44px;
    font-weight: 900;
    line-height: 0.9;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
`;

export const CrossSvg = styled.svg`
  width: 36px;
  height: 36px;
  margin-bottom: 16px;
`;

export const ContactUsText = styled.p`
  font-family: "Messina Sans Mono", monospace;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: center;
  max-width: 216px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  svg {
    width: 48px;
    height: 48px;
    padding: 12px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    background-color: var(--primary-color);
  }

  button {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.19;
    text-transform: uppercase;
    padding: 10px 0 12px 0;
    background-color: var(--accent-color);
    border-radius: 8px;
    border: none;
    outline: none;
  }
`;

export const getBorderColor = (props) => {
  if (props.$error) {
    return "var(--accent-color)";
  } else if (props.$filled) {
    return "white";
  } else {
    return "var(--primary-color)";
  }
};

export const Input = styled.input`
  padding: 17px 0px 17px 24px;
  border: 1px solid ${getBorderColor};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: transparent;
  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  text-transform: uppercase;
  max-height: 48px;
  max-width: 168px;
  outline: none;
`;

export const ErrorMessage = styled.p`
  font-family: "Messina Sans Mono", monospace;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  text-align: right;
  color: var(--accent-color);
  text-transform: uppercase;
  position: absolute;
  right: 0;
  bottom: -12px;

  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
