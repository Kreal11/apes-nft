import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  li {
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: var(--bg-light-grey-color);
    ${({ $burger }) =>
      $burger === "burger" && `background-color: var(--default-light-color)`};

    a {
      height: 16px;
    }

    @media screen and (min-width: ${tablet}) {
      &:hover {
        svg {
          fill: var(--default-color);
        }
      }
    }
  }

  svg {
    width: 16px;
    height: 16px;
    ${({ $burger }) => $burger === "burger" && `fill: var(--default-color)`}
  }
`;
