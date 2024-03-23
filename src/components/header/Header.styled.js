import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const LogoNavLink = styled(NavLink)`
  display: inline-flex;
  width: 48px;
  height: 32px;

  svg {
    ${({ $burger }) => $burger === "burger" && `fill: var(--default-color)`};
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
  position: absolute;
  right: 0;
  gap: 8px;
  ${({ $burger }) => $burger === "burger" && `position: static`};
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 16px 6.5px;
    ${({ $burger }) => $burger === "burger" && `padding: 16px 3.5px`};
    color: black;
    ${({ $burger }) => $burger === "burger" && `color: var(--default-color);`}
    font-family: "Messina Sans Mono", monospace;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.16;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    outline: none;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-color: var(--primary-color);
  }
`;
