import styled from "styled-components";

export const FAQHeader = styled.h2`
  font-family: "Right Grotesk Compact", monospace;
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;
  margin-bottom: 24px;
`;

export const QuestionWrapper = styled.div`
  background-color: ${(props) =>
    props.$isOpen ? "var(--primary-color)" : "transparent"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 216px;
  padding: 8px 8px 10px 8px;
  margin: 0 auto;
  border-radius: 12px;

  h3 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    max-width: 160px;
  }

  p {
    max-width: 160px;
  }
`;

export const FAQSection = styled.section`
  margin-bottom: 60px;
`;

export const QuestionNumber = styled.p`
  font-family: "Biro Script Plus", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--accent-color);
`;

export const QuestionHeaderWrapper = styled.div`
  p {
    color: ${(props) =>
      props.$isOpen ? "var(--default-color)" : "var(--accent-color)"};
  }

  h3 {
    color: ${(props) =>
      props.$isOpen ? "var(--accent-color)" : "var(--default-color)"};
  }
  display: flex;
  justify-content: center;
  gap: 8px;

  &:hover {
    p {
      color: var(--default-color);
    }

    h3 {
      color: var(--accent-color);
    }
  }
`;

export const QuestionDescr = styled.p`
  margin-left: 35px;
  text-transform: uppercase;

  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;

  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  height: ${(props) => (props.$isOpen ? "auto" : "0px")};

  transition: visibility ${(props) => (props.$isOpen ? "0s" : "0.5s")} ease,
    height ${(props) => (props.$isOpen ? "0s" : "0.5s")} ease;
`;
