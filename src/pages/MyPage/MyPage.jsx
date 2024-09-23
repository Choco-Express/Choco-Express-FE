import * as S from "./style";
import HeartBackG from "@/components/common/Heartbackground/heartBackG";
import INSTA_URL from "@/assets/images/instaLogo.svg";

export const MyPage = ({ user = "test" }) => {
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <S.Title>[ {user} ]의 초콜릿 상자</S.Title>
        <S.BoxContainer>
          <S.ModifyBtn>수정</S.ModifyBtn>
          <S.BoxImg />
          <S.BtnContainer>
            <S.BoxBtn>상자 엿보기</S.BoxBtn>
            <S.BoxBtn>상자 열어보기</S.BoxBtn>
          </S.BtnContainer>
        </S.BoxContainer>
        <S.ShareBtn>URL 공유하고 더 많은 편지 받기</S.ShareBtn>
        <S.ShareBtn>
          <S.InstaLogo src={INSTA_URL} />
          스토리로 상자 자랑하기
        </S.ShareBtn>
      </S.Wrapper>
    </S.Container>
  );
};
