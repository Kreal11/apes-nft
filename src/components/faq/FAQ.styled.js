import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const FAQHeader = styled.h2`
  font-family: "Right Grotesk Compact", monospace;
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;

export const QuestionWrapper = styled.div`
  background-color: ${(props) =>
    props.$isOpen ? "var(--primary-color)" : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  max-width: 216px;
  padding: 8px 8px 10px 8px;
  margin: 0 auto;
  border-radius: 12px;
  position: relative;

  @media screen and (min-width: ${tablet}) {
    padding: 18px 16px 23px 0px;
    max-width: 592px;
    gap: 12px;
  }

  @media screen and (min-width: ${desktop}) {
    padding: 24px;
    max-width: 1035px;
    gap: 36px;
  }

  h3 {
    font-family: "Right Grotesk Compact", monospace;
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    max-width: 160px;

    @media screen and (min-width: ${tablet}) {
      font-size: 32px;
      line-height: 1;
      max-width: 339px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 64px;
      max-width: 635px;
    }
  }
`;

export const FAQSection = styled.section`
  margin-bottom: 60px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const QuestionNumber = styled.p`
  font-family: "Biro Script Plus", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--accent-color);

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 24px;
    line-height: 2.3;
  }
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

  @media screen and (min-width: ${tablet}) {
    gap: 21px;
  }

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
  max-width: 160px;
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

  @media screen and (min-width: ${tablet}) {
    max-width: 339px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 16px;
    line-height: 1.19;
    max-width: 635px;
  }
`;

export const FAQImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-16deg);
  left: 20px;
  width: 148px;
  height: 183px;
  border-radius: 16px;
  transform: translateY(-50%);
  transform: ${(props) =>
    props.$isOpen ? "translateY(-50%) rotate(-16deg)" : "translateY(-50%)"};

  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};

  transition: visibility ${(props) => (props.$isOpen ? "0s" : "0.5s")} ease,
    transform 1s ease;

  @media screen and (min-width: ${desktop}) {
    left: 30px;
    width: 248px;
    height: 282px;
  }
`;
