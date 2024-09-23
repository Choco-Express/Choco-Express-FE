import React, { useState } from "react";
import * as S from "./Styled";
import HeartBackGlogin from "../../components/common/Heartbackground/heartBackGlogin";
import KakaoLogo from "../../assets/images/Icon/KakaoLogo.svg";
import GoogleLogo from "../../assets/images/Icon/GoogleLogo.svg";
import NaverLogo from "../../assets/images/Icon/NaverLogo.svg";

import { Link } from "react-router-dom";

import { instance } from "../../apis/instance";

const LoginPage = () => {
  const handleKakaoLogin = async () => {
    try {
      const response = await instance.post("/oauth2/authorization/kakao");
      console.log("Kakao login success", response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn("Token expired, reissuing...");
        await handleTokenReissue();
        handleKakaoLogin();
      } else {
        console.error("Kakao login failed", error);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await instance.post("/oauth2/authorization/Google");
      console.log("Google login success", response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn("Token expired, reissuing...");
        await handleTokenReissue();
        handleGoogleLogin();
      } else {
        console.error("Google login failed", error);
      }
    }
  };

  const handleNaverLogin = async () => {
    try {
      const response = await instance.post("/oauth2/authorization/Naver");
      console.log("Naver login success", response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn("Token expired, reissuing...");
        await handleTokenReissue();
        handleNaverLogin();
      } else {
        console.error("Naver login failed", error);
      }
    }
  };

  const handleTokenReissue = async () => {
    try {
      const response = await instance.post("/api/auth/reissue");
      console.log("Token reissue success", response.data);
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.newToken}`;
    } catch (error) {
      console.error("Token reissue fail", error);
    }
  };

  // 토큰을 초기에 발급받은 것이 만료 즉 401 상태일경우 handleTokenReissue를 통해 재발급을 받고 다시 로그인에 시도한다!
  // but 재차 발급받는 것에 다시 오류가 발생하였을 경우 (토큰 재발급에 실패한 경우)
  // 다시 로그인 할 수 있도록 페이지를 전환한다거나 alert을 띄우는 등 새로운 로직이 필요하다

  return (
    <S.Container>
      <HeartBackGlogin />
      <S.Wrapper>
        <S.Btn_list>
          <Link to="https://api.choco-express.site/oauth2/authorization/kakao">
            <S.Btn_Kakaologin>
              <img src={KakaoLogo} alt="Kakao logo" />
              Log in with Kakao
            </S.Btn_Kakaologin>
          </Link>

          <S.Btn_Googlelogin onClick={handleGoogleLogin}>
            <img src={GoogleLogo} alt="Google logo" />
            Log in with Google
          </S.Btn_Googlelogin>
          <S.Btn_Naverlogin onClick={handleNaverLogin}>
            <img src={NaverLogo} alt="Naver logo" />
            Log in with NAVER
          </S.Btn_Naverlogin>
        </S.Btn_list>
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginPage;
