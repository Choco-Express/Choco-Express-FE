import * as S from "./styled";
import HEART from "../../../assets/images/heart_Logo.svg";
import LOGO from "../../../assets/images/mainLogo.svg";

const HeartBackG = () => {
  return (
    <S.ImgContainer>
      <S.HEART
        src={HEART}
        style={{
          width: "100%",
        }}
      />
      <S.Logo src={LOGO} />
    </S.ImgContainer>
  );
};
export default HeartBackG;
