import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ContentWrapper = styled.div`
  padding: 54px 8px 24px;
  position: relative;
  background-color: #1c1c1c;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const StyledCloseButton = styled.button`
  border: none;
  padding: 5px;
  width: 18px;
  height: 18px;
  background-color: transparent;

  position: absolute;

  top: 14px;
  right: 20px;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: ${tablet}) {
    right: 28px;
    width: 24px;
    height: 24px;
  }
`;
