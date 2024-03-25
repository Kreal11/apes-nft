import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const ArtWrapper = styled.div`
  max-width: 216px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }

  @media screen and (min-width: ${tablet}) {
    max-width: 284px;
    ${({ $index }) => $index !== 0 && $index <= 13 && "margin-left: 24px;"}
    ${({ $index }) => $index % 2 === 0 && $index <= 12 && "margin-left: auto;"}
  }

  img {
    margin-bottom: 24px;
    width: 216px;
    height: 256px;
    border-radius: 12px;

    @media screen and (min-width: ${tablet}) {
      width: 284px;
      height: 336px;
      margin-bottom: 21px;
    }
  }
`;
