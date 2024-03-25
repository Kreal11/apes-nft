import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
const { tablet } = breakpoints;

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 8px;
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
      fill: var(--default-color);
      ${({ $burger }) => $burger === "burger" && `fill: var(--accent-color)`};
    }
  }
`;

export const MenuAndSocialsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 17px 8.5px;
  ${({ $burger }) => $burger === "burger" && `padding: 17px 5px`};
  color: var(--primary-color);
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
  background-color: var(--bg-light-grey-color);

  @media screen and (min-width: ${tablet}) {
    padding: ${({ $isOpen }) => ($isOpen ? "17px 5px" : "17px 8.5px")};
    border-bottom-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "8px")};
    border-top-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "8px")};
  }
`;
