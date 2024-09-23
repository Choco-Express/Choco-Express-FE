import * as S from "./Styled";
import React, { useState } from "react";
import { NameSetting } from "../../components/NameSetting/NameSetting";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import BoxSelector from "../../components/ChocoSelector/BoxSelector";

import { instance } from "../../apis/instance";
import { NextBtn } from "../../components/common/Button/NextBtn";
import { BackBtn } from "../../components/common/Button/BackBtn";

const MyboxSelectPage = () => {
  const [selectedChoco, setSelectedChoco] = useState("");
  const [isSelectedChoco, setIsSelectedChoco] = useState(false);
  const [boxName, setBoxName] = useState(""); // 입력 값을 관리하는 상태 추가

  const handleSelectChoco = (id) => {
    setSelectedChoco(id);
    console.log(`Selected choco ID: ${id}`);
  };

  const handleNext = () => {
    if (selectedChoco) {
      setIsSelectedChoco(true);
      console.log("다음 페이지로 이동합니다.");
    }
  };

  const handleInputChange = (value) => {
    setBoxName(value); // 입력 값 업데이트
  };

  const handleSubmit = async () => {
    const data = {
      boxName: boxName, // 입력된 이름을 사용
      boxType: selectedChoco, // 선택된 초콜릿 ID를 boxType으로 사용
    };

    console.log('보낼 데이터:', data);

    try {
      const response = await instance.post('/api/box', data);
      console.log('Box 생성 성공:', response.data);
    } catch (error) {
      console.error('Box 생성 실패:', error);
    }
  };

  const handleBack = () => {
    setIsSelectedChoco(false);
  };

  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        {isSelectedChoco ? (
          <>
            <NameSetting
              coment_1={"내 초콜릿 상자의"}
              coment_2={"이름을 정해주세요"}
              inputValue={boxName} // 상태를 inputValue로 전달
              onInputChange={handleInputChange} // 입력 값이 변경될 때 호출될 함수 전달
              onSubmit={handleSubmit}
              onBack={handleBack}
              showNextBtn={false}
              showBackBtn={false}
            />
            <S.buttonContainer>
              <BackBtn onClick={handleBack} />
              <NextBtn onClick={handleSubmit} label="완료" />
            </S.buttonContainer>
          </>
        ) : (
          <BoxSelector
            coment={
              <S.CenterText>
                달콤함을 받아볼<br/>나만의 상자를 골라주세요
              </S.CenterText>
            }
            selectedChoco={selectedChoco}
            onSelectChoco={handleSelectChoco}
            onNext={handleNext}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default MyboxSelectPage;
