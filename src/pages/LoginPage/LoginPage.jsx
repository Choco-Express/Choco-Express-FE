import React, { useState } from "react";
import * as S from "./Styled";

import HeartBackGlogin from "../../components/common/Heartbackground/heartBackGlogin";
import KakaoLogo from "../../assets/images/Icon/KakaoLogo.svg";
import GoogleLogo from "../../assets/images/Icon/GoogleLogo.svg";
import NaverLogo from "../../assets/images/Icon/NaverLogo.svg";

import { instance } from "../../apis/instance";

const LoginPage = () => {

  const handleKakaoLogin = async () => {
    try {
      const response = await instance.post('/oauth2/authorization/kakao');
      console.log('Kakao login success', response.data);
    } catch (error) {
      console.error('Kakao login fail', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await instance.post('/oauth2/authorization/Google');
      console.log('Google login success', response.data);
    } catch (error) {
      console.error('Google login fail', error);
    }
  };

  const handleNaverLogin = async () => {
    try {
      const response = await instance.post('/oauth2/authorization/Naver');
      console.log('Naver login success', response.data);
    } catch (error) {
      console.error('Naver login fail', error);
    }
  };
  
  return (
    <S.Container>
      <HeartBackGlogin />
      <S.Wrapper>
        <S.Btn_list>
          <S.Btn_Kakaologin onClick={handleKakaoLogin}><img src={KakaoLogo} alt="Kakao logo" />Log in with Kakao</S.Btn_Kakaologin>
          <S.Btn_Googlelogin onClick={handleGoogleLogin}><img src={GoogleLogo} alt="Google logo" />Log in with Google</S.Btn_Googlelogin>
          <S.Btn_Naverlogin onClick={handleNaverLogin}><img src={NaverLogo} alt="Naver logo" />Log in with NAVER</S.Btn_Naverlogin>
        </S.Btn_list>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage;