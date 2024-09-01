import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  position: absolute;
  z-index: 5;
  color: white;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;

  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  .letterImg {
    position: relative;
    z-index: 1;
    width: 243.626px;
  }
`;
export const textContainer = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  z-index: 2;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;

  .textarea {
    width: 100%;
    min-height: 190px;
    padding: 10px;
    resize: none; // 크기 조정 막기
    z-index: 3;

    background-color: transparent;
    border: none;
    outline: none;

    font-family: "LeeSeoyun";
    color: #532a13;
    text-align: justify;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
  .nickName {
    margin-top: 10px;
    z-index: 3;
    color: black;
    font-weight: bold;
    align-self: flex-end;
    margin-right: 1rem;
    font-family: "LeeSeoyun";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
`;
export const buttonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  &:hover,
  :active {
    background: #f34381;
  }
`;
