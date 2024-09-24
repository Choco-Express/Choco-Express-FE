import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  color: white;
  gap: 20px;
  height: 437px;
  align-items: center;

  @media (min-width: 391px) and (max-width: 450px) {
    margin-top: 8rem;
  }
  @media (max-width: 390px) {
    margin-top: 13rem;
  }
`;

export const CenterText = styled.div`
  display: flex;
  text-align: center;
`;

export const buttonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  bottom: 10px;
`;
