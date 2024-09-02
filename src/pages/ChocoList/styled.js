import styled from "styled-components";
import BackImg1 from "../../assets/images/BackImg/BackImg1.svg"; // 이미지 파일 import
import BackImg2 from "../../assets/images/BackImg/BackImg2.svg";
import BackImg3 from "../../assets/images/BackImg/BackImg3.svg";
import BackImg4 from "../../assets/images/BackImg/BackImg4.svg";
import BackImg5 from "../../assets/images/BackImg/BackImg5.svg";
import BackImg6 from "../../assets/images/BackImg/BackImg6.svg";

// 선택된 상자의 ID에 따라 배경 이미지를 반환하는 함수
const getBackgroundImage = (id) => {
  switch (id) {
    case 1:
      return `url(${BackImg1})`;
    case 2:
      return `url(${BackImg2})`;
    case 3:
      return `url(${BackImg3})`;
    case 4:
      return `url(${BackImg4})`;
    case 5:
      return `url(${BackImg5})`;
    case 6:
      return `url(${BackImg6})`;
    default:
      return "none";
  }
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 667px;
  background-image: ${({ $selectedBoxId }) =>
    getBackgroundImage($selectedBoxId)};
  background-size: cover;
  background-position: center;
  background-color: lightgrey; /* 임시로 배경색 설정 */
  z-index: 0;
`;

export const Logo = styled.img`
  all: initial; /* 모든 스타일을 초기화 */
  display: flex;
  position: absolute;
  top: 20px;
  z-index: 10;
`;

export const Name = styled.div`
  position: absolute;
  top: 170px;
  color: #fef7e2;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 550px;
`;

export const PageIndicator = styled.div`
  font-size: 16px;
  color: #fef7e2;
  font-family: Pretendard;
  position: absolute;
  top: 530px;
`;
