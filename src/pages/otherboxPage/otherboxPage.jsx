import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
export const OtherboxPage = () => {
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="Box">
          <div>[하채민] 의 초콜릿 상자</div>
          <S.BoxContainer></S.BoxContainer>
        </div>
        <S.ButtonContainer>
          <S.Button>초콜릿 보내기 </S.Button>
          <S.Button>내 초콜릿 상자 보러가기</S.Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};
