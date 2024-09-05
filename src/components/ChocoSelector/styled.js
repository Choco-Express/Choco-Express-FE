import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 377px;
  border-radius: 33px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
`;
export const BoxGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  cursor: pointer;
`;
export const BoxItem = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 100px;
  height: 113.136px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    filter: ${({ selected }) =>
      selected ? "drop-shadow(0px 0px 15px rgba(255, 20, 147, 0.8))" : "none"};


  
  }
`;

export const buttonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
