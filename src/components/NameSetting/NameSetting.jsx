import * as S from "./styled";
import React, { useState } from "react";
import Enter from "../../assets/images/EnterIcon.svg";

export const NameSetting = ({ coment_1, coment_2, onSubmit, onBack }) => {
  const [inputValue, setInputValue] = useState("");
  const handleNextClick = () => {
    if (inputValue) {
      onSubmit(inputValue);
    }
  };

  const handleBackClick = () => {
    onBack();
  };
  return (
    <S.Wrapper>
      <S.ComentContainer>
        <div className="coment">{coment_1}</div>
        <div className="coment">{coment_2}</div>
      </S.ComentContainer>
      <S.NameForm>
        <S.Enter>
          <img src={Enter} />
        </S.Enter>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </S.NameForm>
      <S.buttonContainer>
        <S.Btn onClick={handleBackClick}>이전</S.Btn>
        <S.Btn onClick={handleNextClick}>다음</S.Btn>
      </S.buttonContainer>
    </S.Wrapper>
  );
};
