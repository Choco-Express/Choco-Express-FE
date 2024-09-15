import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { useNavigate, useParams, useLocation } from "react-router-dom";
export const CompletePage = () => {
  const { boxId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const otherData = location.state?.otherData;

  if (!otherData) {
    return <div>Data not found</div>;
  }
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="Box">
          <div>[{otherData.boxName}] 에게 초콜릿을 보냈어요!</div>
          <S.BoxContainer></S.BoxContainer>
        </div>
        <S.ButtonContainer>
          <S.Button onClick={() => navigate(`/box/${boxId}`)}>확인 </S.Button>
          <S.Button onClick={() => navigate(`/box/${boxId}`)}>
            저도 초콜릿 받아볼래요
          </S.Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};
