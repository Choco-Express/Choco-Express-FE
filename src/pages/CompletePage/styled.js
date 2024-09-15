import styled from "styled-components";
import CompleteLogo from "../../assets/images/CompleteLogo.svg";

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
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  .Box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fef7e2;
    font-family: "Pretendard-Regular";
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 318px;
  height: 200px;
  border-radius: 33px;

  margin-top: 10px;
  background: url(${CompleteLogo}) 50% / cover no-repeat;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.div`
  display: flex;
  padding: 5px 50px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid #fef7e2;
  background: #532a13;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  color: #fef7e2;
  cursor: pointer;
`;
