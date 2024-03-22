import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LogoNavLink = styled(NavLink)`
  svg {
    width: 48px;
    height: 32px;
  }

  &:hover {
    svg {
      fill: var(--accent-color);
    }
  }
`;

export const MenuAndSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    outline: none;
    padding: 16px 8.5px;
    background-color: var(--primary-color);
    border-radius: 8px;
    filter: saturate(10%);
  }
`;
