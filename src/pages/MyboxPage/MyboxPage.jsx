import React, { useState } from "react";

import * as S from "./Styled";

import HeartBackGlogin from "../../components/common/Heartbackground/heartBackGlogin";

const MyboxPage = () => {
  return (
    <S.Container>
      <HeartBackGlogin />
      <S.Wrapper>
        <S.Container_2>
          <S.Text700>Life is like a box of chocolates.</S.Text700>
          <S.Text500>인생은 초콜릿 상자와 같은 거란다.<br />열기 전까지는 뭘 잡을지 아무도 알 수 없어.</S.Text500>
          <S.Text600>⋅⋅⋅</S.Text600>
          <S.Text500>누군가의 에측불허한 인생에,<br />달콤한 초콜릿을 선물할 수 있다면 어떨까요.<br />따뜻한 달콤함을 배달합니다.</S.Text500>
          <br />
          <S.Text600>2월 14일,<br />세상에서 가장 달콤한 편지를 받아보시려면</S.Text600>
          <S.StyledLink to="/mybox/select">
            <S.Btn_MakeBox>내 초콜릿 상자 만들기</S.Btn_MakeBox>
          </S.StyledLink>
        </S.Container_2>
      </S.Wrapper>
    </S.Container>
  )
}

export default MyboxPage;