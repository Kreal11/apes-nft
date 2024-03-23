import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-transform: uppercase;
  font-family: "Messina Sans Mono", monospace;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  font-style: normal;
`;

export const BurgerNavLink = styled(NavLink)`
  color: var(--default-color);
  text-decoration: none;
`;
