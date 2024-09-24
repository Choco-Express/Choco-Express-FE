import styled from "styled-components";
import BOX_URL from "@/assets/images/boxes/box_1.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fef7e2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  color: white;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 391px) and (max-width: 450px) {
    margin-top: 8rem;
  }
  @media (max-width: 390px) {
    margin-top: 13rem;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || "17px"};
  font-style: normal;
  font-weight: 600;
  color: ${({ color }) => color || "white"};
`;

export const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fef7e2;
  width: 70%;
  height: 300px;
  border-radius: 33px;
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
  position: relative;
`;

export const ExpressWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  position: absolute; /* 절대 위치 */
  border-radius: 50%;
  background: #da8b7f;

  &:nth-child(2) {
    left: calc(50% - 100px); /* 왼쪽 Circle */
  }

  &:nth-child(3) {
    right: calc(50% - 100px); /* 오른쪽 Circle */
  }
`;

export const DescriptionWrapper = styled.div`
  margin-top: 4rem;
`;

export const BirdImg = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  z-index: 3;
`;

export const ShareBtn = styled.button`
  border-radius: 2rem;
  border: 2px solid #fef7e2;

  background: #532a13;
  width: 80%;
  height: 3.5rem;
  color: #fef7e2;

  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const InstaLogo = styled.img`
  text-align: center;
  padding-bottom: 0.2rem;
`;
