import * as S from "./styled";
import React, { useState } from "react";
import { LETTERS } from "../../constants/letters/data";
import { BackBtn } from "../common/Button/BackBtn";
export const LetterPost = ({ selectedChoco, nickName, onsubmit, onBack }) => {
  const [content, setContent] = useState("");
  const selectedLetter = LETTERS.find((letter) => letter.id === selectedChoco);
  const handleBackClick = () => {
    onBack();
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    onsubmit(content);
  };

  return (
    <S.Wrapper>
      {selectedLetter ? (
        <S.Container>
          <S.LetterContainer>
            <div>달콤한 메세지를 적어주세요</div>
            <img
              className="letterImg"
              src={selectedLetter.src}
              alt={selectedLetter.id}
            />
            <S.textContainer>
              <textarea
                className="textarea"
                value={content}
                onChange={handleContentChange}
              ></textarea>
              <div className="nickName">from.{nickName}</div>
            </S.textContainer>
          </S.LetterContainer>
          <S.buttonContainer>
            <BackBtn onClick={handleBackClick} />
            <S.Btn onClick={handleSubmit}>전송하기</S.Btn>
          </S.buttonContainer>
        </S.Container>
      ) : (
        <p>편지지를 찾을 수 없습니다</p>
      )}
    </S.Wrapper>
  );
};
