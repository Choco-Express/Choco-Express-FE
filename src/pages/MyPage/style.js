import styled from "styled-components";
import BOX_URL from "@/assets/images/boxes/box_1.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
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
  justify-content: center;

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
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  /* margin-top: 2rem; */
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2d0d0;
  width: 80%;
  height: 300px;
  border-radius: 33px;
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
  position: relative;
  gap: 2rem;
`;

export const ModifyBtn = styled.div`
  color: #886152;
  font-size: 17px;
  font-weight: 600;
  line-height: 135%;
  top: 1rem;
  right: 1.5rem;
  position: absolute;
  cursor: pointer;
`;

export const BoxImg = styled.div`
  background: url(${BOX_URL}) #f2d0d0 50% / cover no-repeat;
  width: 120px;
  height: 120px;
`;

export const BtnContainer = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const BoxBtn = styled.button`
  border-radius: 21px;
  border: 2px solid #532a13;
  width: 40%;
  height: 90%;
  color: #532a13;

  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
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
