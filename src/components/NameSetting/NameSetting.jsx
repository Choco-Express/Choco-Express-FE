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
        <BackBtn onClick={handleBackClick} />
        <NextBtn onClick={handleNextClick} />
      </S.buttonContainer>
    </S.Wrapper>
  );
};
