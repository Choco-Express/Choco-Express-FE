import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { useNavigate } from "react-router-dom";
import { BOXES } from "../../constants/Boxes/data";
import { useOtherBox } from "../../hooks/useOtherBox";
export const OtherboxPage = () => {
  const { otherData } = useOtherBox();
  console.log("otherData:", otherData);
  const navigate = useNavigate();
  const MoveOnLetterP = () => {
    const boxId = otherData.boxId;

    navigate(`/box/${boxId}/choco`, { state: { otherData } });
  };
  if (!otherData) {
    return <div>Loading...</div>; // 데이터가 로드되기 전에 로딩 메시지를 표시하거나 로딩 스피너를 추가할 수 있음
  }
  const selectedBox = BOXES.find((box) => box.id === otherData.boxType);
  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        <div className="Box">
          <div>[{otherData.boxName}] 의 초콜릿 상자</div>
          <S.BoxContainer>
            <img src={selectedBox.src} className="boxImg" />
          </S.BoxContainer>
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
