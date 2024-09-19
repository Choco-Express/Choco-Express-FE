import * as S from "./styled";
import Enter from "../../assets/images/EnterIcon.svg";
import { NextBtn } from "../common/Button/NextBtn";
import { BackBtn } from "../common/Button/BackBtn";
export const NameSetting = ({
  coment_1,
  coment_2,
  inputValue,
  onInputChange,
  onSubmit,
  onBack,
  showBackBtn = true,
  showNextBtn = true, // 기본적으로 다음 버튼을 활성화해놓는다.
}) => {
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
      <S.FormContainer>
        <S.NameForm
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <S.Enter>
          <img src={Enter} />
        </S.Enter>
      </S.FormContainer>
      <S.buttonContainer>
        {showBackBtn && (
          <BackBtn onClick={handleBackClick} />
        )}
        {showNextBtn && (
          <NextBtn onClick={handleNextClick} label="다음" />
        )}
      </S.buttonContainer>
    </S.Wrapper>
  );
};
