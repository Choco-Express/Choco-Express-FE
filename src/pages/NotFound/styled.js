import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 60px;
  align-items: center;
  justify-content: center;

  .error {
    color: #fef7e2;
    text-align: center;
    font-family: "Pretendard-Regular";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 135%; /* 16.2px */
    letter-spacing: -0.6px;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .Dots {
    position: absolute;
    z-index: 2;
  }

  .bird {
    position: absolute;
    z-index: 3;
  }
`;
export const ComentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 600;

  .coment {
    font-size: 12px;
  }
`;
export const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 50px;
  gap: 10px;
  border-radius: 30px;
  border: 2px solid #fef7e2;
  background: #532a13;
  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 20.4px */
  cursor: pointer;
  &:hover,
  :active {
    background: #f34381;
  }
`;
