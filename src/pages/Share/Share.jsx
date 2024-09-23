import * as S from "./style";
import HeartBackG from "@/components/common/Heartbackground/heartBackG";
import INSTA_URL from "@/assets/images/instaLogo.svg";
import { shareKakao } from "@/utils/shareKakao";
import { shareInsta } from "@/utils/shareInsta";
import BIRD_IMG from "@/assets/images/bird.svg";
import { useFormattedDate } from "@/hooks/useFormattedDate";

export const SharePage = ({
  user = "test",
  gift = "3",
  isoDate = "2024-09-24T08:55:30.000Z",
}) => {
  const formattedDate = useFormattedDate(isoDate);

  return (
    <S.Container id="capture">
      <HeartBackG />
      <S.Wrapper>
        <S.Title>[ {user} ]의 초콜릿 상자</S.Title>
        <S.ShareContainer>
          <S.ExpressWrapper>
            <S.BirdImg src={BIRD_IMG} />
            <S.Circle />
            <S.Circle />
            <S.Circle />
          </S.ExpressWrapper>
          <S.DescriptionWrapper>
            <S.Title color="#532A13">
              [ {gift} ]개의 초콜릿이 배달되고 있어요!
            </S.Title>
            <S.Title color="#532A13" fontSize="12px">
              배송예정일: {formattedDate}
            </S.Title>
          </S.DescriptionWrapper>
        </S.ShareContainer>
        <S.ShareBtn onClick={shareKakao}>
          URL 공유하고 더 많은 편지 받기
        </S.ShareBtn>
        <S.ShareBtn onClick={shareInsta}>
          <S.InstaLogo src={INSTA_URL} />
          스토리로 상자 자랑하기
        </S.ShareBtn>
      </S.Wrapper>
    </S.Container>
  );
};
