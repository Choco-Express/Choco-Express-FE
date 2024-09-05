import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const ComentContainer = styled.div`
  display: flex;
  flex-direction: column;

  .coment {
    color: #fef7e2;
    font-family: "Pretendard-Regular";
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const NameForm = styled.input`
  display: flex;
  width: 310px;
  height: 67px;
  padding: 0 3.5rem;
  border-radius: 33px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
  font-family: "LeeSeoyun";
`;
export const Enter = styled.div`
  position: absolute;
  z-index: 8;
  left: 20px;
`;

export const buttonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  bottom: 10px;
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid #fef7e2;
  background: #532a13;
  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 20.4px */
`;
