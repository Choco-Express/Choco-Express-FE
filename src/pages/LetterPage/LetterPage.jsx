import * as S from "./styled";
import React, { useState } from "react";
import { NameSetting } from "../../components/NameSetting/NameSetting";
import BoxSelector from "../../components/BoxSelector/BoxSelector";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";

export const LetterPage = () => {
  const [selectedBox, setSelectedBox] = useState("");
  const [isSelectedBox, setIsSelectedBox] = useState(false);

  const handleSelectBox = (boxId) => {
    setSelectedBox(boxId);
    console.log(`Selected box ID: ${boxId}`);
  };

  const handleNext = () => {
    if (selectedBox) {
      setIsSelectedBox(true);
      console.log("다음페이지로");
    }
  };
  const handleSubmit = (inputValue) => {
    //여기서 api연결 작업 시작!
  };

  const handleBack = () => {
    setIsSelectedBox(false); // BoxSelector로 돌아가기
    setSelectedBox(""); // 선택된 박스를 초기화
  };

  return (
    <S.Container>
      <HeartBackG />
      <S.Wrapper>
        {isSelectedBox ? (
          <NameSetting
            coment_1={"상대방이 확인할"}
            coment_2={"이름을 정해주세요"}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        ) : (
          <BoxSelector
            coment="보내고 싶은 초콜릿을 선택해주세요"
            selectedBox={selectedBox}
            onSelectBox={handleSelectBox}
            onNext={handleNext}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
