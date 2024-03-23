import styled from "styled-components";

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: var(--primary-color);
    border-radius: 8px;
    filter: saturate(10%);

    a {
      height: 16px;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    ${({ $burger }) => $burger === "burger" && `fill: var(--default-color)`}
  }
`;
