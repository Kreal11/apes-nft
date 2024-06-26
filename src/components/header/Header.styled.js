import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
const { tablet, desktop } = breakpoints;

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

  @media screen and (min-width: ${tablet}) {
    &:hover {
      svg {
        fill: var(--default-color);
        ${({ $burger }) => $burger === "burger" && `fill: var(--accent-color)`};
      }
    }
  }

  @media screen and (min-width: ${desktop}) {
    width: 72px;
    height: 50px;

    svg {
      width: 72px;
      height: 50px;
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
  ${({ $burger }) =>
    $burger === "burger" && `background-color: var(--default-light-color)`};

  @media screen and (min-width: ${tablet}) {
    padding: ${({ $isOpen }) => ($isOpen ? "17px 5px" : "17px 8.85px")};
    border-bottom-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "8px")};
    border-top-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "8px")};

    &:hover {
      color: var(--default-color);
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${desktop}) {
    border-radius: 12px;
    font-size: 16px;
    line-height: 1.19;
    border-bottom-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "12px")};
    border-top-left-radius: ${({ $isOpen }) => ($isOpen ? "0px" : "12px")};
    padding: ${({ $isOpen }) => ($isOpen ? "30px 15px" : "30px 20px")};
  }
`;
