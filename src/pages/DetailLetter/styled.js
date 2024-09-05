import styled from "styled-components";

export const DetailLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const LetterPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Letter = styled.img`
  width: 16rem;
  height: auto;
  z-index: 10;
  position: relative;
`;

export const textContainer = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  z-index: 10;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;

  .contents {
    width: 100%;
    min-height: 190px;
    padding: 10px;
    resize: none;
    z-index: 3;
    line-height: 1.5;
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
