import styled from "styled-components";

export const DetailLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 화면 전체 높이를 차지하도록 설정 */
  position: relative;
  overflow: hidden; /* 자식 요소가 부모 요소를 벗어나지 않도록 설정 */
`;

export const LetterPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%); /* 수직 및 수평 중앙 정렬 */
  z-index: 10;
`;

export const Letter = styled.img`
  width: 16rem;
  height: auto; /* 높이를 자동으로 설정하여 비율 유지 */
  z-index: 10;
  position: relative;
`;

export const CloseButton = styled.img`
  z-index: 11;
  position: absolute;
  top: 11px;
  right: 11px;
  width: 25px;
`;

export const DeleteButton = styled.img`
  z-index: 11;
  position: absolute;
  top: 3px;
  right: 40px;
  color: white;
  width: 30px;
`;
