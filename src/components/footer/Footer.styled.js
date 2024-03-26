import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const FooterTag = styled.footer`
  text-transform: uppercase;
  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    max-width: 216px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
`;
