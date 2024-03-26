import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Messina Sans Mono", monospace;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  font-style: normal;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    gap: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    position: absolute;
    right: 48px;
    margin-top: 0px;
    background-color: var(--bg-light-grey-color);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  @media screen and (min-width: ${desktop}) {
    right: 80px;
    margin-top: 0px;
    background-color: var(--bg-light-grey-color);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const BurgerNavLink = styled(NavLink)`
  color: var(--default-color);
  text-decoration: none;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    color: var(--primary-color);
    width: 48px;
    height: 47.9px;

    &:hover {
      color: var(--default-color);
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${desktop}) {
    width: 80px;
    height: 79px;
    font-size: 16px;
    line-height: 1.19;
  }
`;
