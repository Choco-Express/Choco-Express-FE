import React, { useState } from "react";
import * as S from "./Styled";

import HeartBackGlogin from "../../components/common/Heartbackground/heartBackGlogin";
import KakaoLogo from "../../assets/images/Icon/KakaoLogo.svg";
import GoogleLogo from "../../assets/images/Icon/GoogleLogo.svg";
import NaverLogo from "../../assets/images/Icon/NaverLogo.svg";

const LoginPage = () => {
  
  return (
    <S.Container>
      <HeartBackGlogin />
      <S.Wrapper>
        <S.Btn_list>
          <S.Btn_Kakaologin><img src={KakaoLogo} alt="Kakao logo" />Log in with Kakao</S.Btn_Kakaologin>
          <S.Btn_Googlelogin><img src={GoogleLogo} alt="Google logo" />Log in with Google</S.Btn_Googlelogin>
          <S.Btn_Naverlogin><img src={NaverLogo} alt="Naver logo" />Log in with NAVER</S.Btn_Naverlogin>
        </S.Btn_list>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage;