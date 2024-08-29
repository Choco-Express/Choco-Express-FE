import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { useNavigate } from "react-router-dom";
export const CompletePage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="Box">
          <div>[하채민] 에게 초콜릿을 보냈어요!</div>
          <S.BoxContainer></S.BoxContainer>
        </div>
        <S.ButtonContainer>
          <S.Button onClick={() => navigate("/box")}>확인 </S.Button>
          <S.Button>저도 초콜릿 받아볼래요</S.Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};
