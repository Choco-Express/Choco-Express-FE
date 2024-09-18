import styled from "styled-components";
import BackImg1 from "../../assets/images/BackImg/BackImg1.svg";
import BackImg2 from "../../assets/images/BackImg/BackImg2.svg";
import BackImg3 from "../../assets/images/BackImg/BackImg3.svg";
import BackImg4 from "../../assets/images/BackImg/BackImg4.svg";
import BackImg5 from "../../assets/images/BackImg/BackImg5.svg";
import BackImg6 from "../../assets/images/BackImg/BackImg6.svg";

const backgroundImages = [
  BackImg1,
  BackImg2,
  BackImg3,
  BackImg4,
  BackImg5,
  BackImg6,
];

const getBackgroundImage = (id) => {
  return backgroundImages[id - 1] ? `url(${backgroundImages[id - 1]})` : "none";
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 667px;
  background-image: ${({ $selectedBoxId }) =>
    getBackgroundImage($selectedBoxId)};
  background-size: cover;
  background-position: center;
  background-color: lightgrey;
  z-index: 0;
`;

export const Logo = styled.img`
  all: initial;
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

export const Test = styled.div`
  position: absolute;
  top: 500px;
`;
