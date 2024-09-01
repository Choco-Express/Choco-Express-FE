import * as S from "./styled";
import HEART from "../../../assets/images/heart_Logo.svg";
import LOGO from "../../../assets/images/mainLogo.svg";

const HeartBackGlogin = () => {
  return (
    <S.ImgContainer>
      <S.HEART src={HEART} />
      <S.LoginLogo src={LOGO} />
    </S.ImgContainer>
  );
};
export default HeartBackGlogin;
