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
  margin-top: 5rem;
`;

export const Container_2 = styled.div`
  display: flex;
  flex-direction: column;
  translate: 0px 120px;
`;

export const Text700 = styled.div`
  color: #FEF7E2;

  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem; // 12px
  font-style: normal;
  font-weight: 700;
`;

export const Text600 = styled.div`
  color: #FEF7E2;

  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem; // 12px
  font-style: normal;
  font-weight: 600;
`;

export const Text500 = styled.div`
  color: #FEF7E2;

  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem; // 12px
  font-style: normal;
  font-weight: 500;
`;

export const Btn_MakeBox = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  width: 14.75rem; // 236px
  height: 3.125rem; // 50px
  flex-shrink: 0;

  border-radius: 1.875rem; // 30px
  border: 2px solid #FEF7E2;
  background: #532A13;

  color: #FEF7E2;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.0625rem; // 17px
  font-style: normal;
  font-weight: 600;

  &:hover,
  :active {
    background: #f34381;
  }
`;