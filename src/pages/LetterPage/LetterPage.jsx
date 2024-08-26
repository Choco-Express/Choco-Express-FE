import * as S from "./styled";
import React, { useState } from "react";
import { NameSetting } from "../../components/NameSetting/NameSetting";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import ChocoSelector from "../../components/ChocoSelector/ChocoSelector";
export const LetterPage = () => {
  const [selectedChoco, setSelectedChoco] = useState("");
  const [isSelectedChoco, setIsSelectedChoco] = useState(false);

  const handleSelectChoco = (id) => {
    setSelectedChoco(id);
    console.log(`Selected choco ID: ${id}`);
  };

  const handleNext = () => {
    if (selectedChoco) {
      setIsSelectedChoco(true);
      console.log("다음페이지로");
    }
  };
  const handleSubmit = (inputValue) => {
    //여기서 api연결 작업 시작!
  };

  const handleBack = () => {
    setIsSelectedChoco(false);
  };

  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        {isSelectedChoco ? (
          <NameSetting
            coment_1={"상대방이 확인할"}
            coment_2={"이름을 정해주세요"}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        ) : (
          <ChocoSelector
            coment="보내고 싶은 초콜릿을 선택해주세요"
            selectedChoco={selectedChoco}
            onSelectChoco={handleSelectChoco}
            onNext={handleNext}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
