import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import Dots from "../../assets/images/3Dots.svg";
import NotFoundLogo from "../../assets/images/NotFoundLogo.svg";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="error">404 NOT FOUND</div>
        <S.ImgContainer>
          <img src={Dots} className="Dots" />
          <img src={NotFoundLogo} className="bird" />
        </S.ImgContainer>
        <S.ComentContainer>
          <div>앗! 안전한 배송을 위한 재정비가 필요해요</div>
          <div className="coment">오류가 발생했습니다</div>
        </S.ComentContainer>
        <S.HomeBtn
          onClick={() => {
            navigate(``);
          }}
        >
          메인으로
        </S.HomeBtn>
      </S.Wrapper>
    </S.Container>
  );
};
