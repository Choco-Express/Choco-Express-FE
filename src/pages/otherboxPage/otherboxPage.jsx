import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { useNavigate } from "react-router-dom";
export const OtherboxPage = () => {
  const navigate = useNavigate();
  const MoveOnLetterP = () => {
    navigate("letter");
  };
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="Box">
          <div>[하채민] 의 초콜릿 상자</div>
          <S.BoxContainer></S.BoxContainer>
        </div>
        <S.ButtonContainer>
          <S.Button
            onClick={() => {
              MoveOnLetterP();
            }}
          >
            초콜릿 보내기
          </S.Button>
          <S.Button>내 초콜릿 상자 보러가기</S.Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};
