import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  padding: 0px 8px;

  @media screen and (min-width: 768px) {
    padding: 0px 16px;
    ${({ $about }) =>
      $about === "about" &&
      css`
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;
      `}
  }
`;
