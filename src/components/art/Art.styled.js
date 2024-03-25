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
