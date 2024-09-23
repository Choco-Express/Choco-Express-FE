import * as S from "./style";
import { useNavigate } from "react-router-dom";
import HeartBackG from "@/components/common/Heartbackground/heartBackG";
import INSTA_URL from "@/assets/images/instaLogo.svg";
import { shareKakao } from "@/utils/shareKakao";

export const MyPage = ({ user = "test" }) => {
  const navigate = useNavigate();
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
        <S.ShareBtn onClick={shareKakao}>
          URL 공유하고 더 많은 편지 받기
        </S.ShareBtn>
        <S.ShareBtn onClick={() => navigate("/share")}>
          <S.InstaLogo src={INSTA_URL} />
          스토리로 자랑할 사진 다운 받기
        </S.ShareBtn>
      </S.Wrapper>
    </S.Container>
  );
};
