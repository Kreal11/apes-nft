import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, mobile } = breakpoints;

export const Nav = styled.nav`
  margin-top: 16px;
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

  @media screen and (max-width: ${mobile}) {
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
  }
`;
