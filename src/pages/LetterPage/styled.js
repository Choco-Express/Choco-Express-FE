import styled from "styled-components";

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
