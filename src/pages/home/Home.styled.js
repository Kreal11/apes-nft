import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const HeaderHeroWrapper = styled.div`
  background-color: var(--accent-color);
  border-radius: 8px;
  padding: 8px 8px 19px 8px;
  margin-bottom: 60px;
  margin-top: 54px;

  @media screen and (min-width: ${tablet}) {
    position: relative;
    min-height: 421px;
    padding: 12px 12px 0px 12px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: ${desktop}) {
    position: relative;
    min-height: 677px;
    padding: 24px 40px 0px 40px;
    margin-bottom: 120px;
  }
`;
