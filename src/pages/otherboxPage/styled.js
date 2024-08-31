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
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

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
  width: 280px;
  height: 220px;
  border-radius: 33px;
  background-color: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
  margin-top: 10px;
  position: relative;
  z-index: 1;

  .boxImg {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 143px;
    height: 148px;
  }
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
  width: 280px;
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
