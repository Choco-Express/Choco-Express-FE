import { useState } from "react";
import * as S from "./styled";
import LOGO from "../../assets/images/mainLogo.svg";
import ChocoCheck33 from "../../components/ChocoCheck/ChocoCheck33";
import ChocoCheck22 from "../../components/ChocoCheck/ChocoCheck22";
import { NextBtn } from "../../components/common/Button/NextBtn";
import { BackBtn } from "../../components/common/Button/BackBtn";
import { CHOCOLATES } from "../../constants/Chocolates/data";

const ChocoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBoxId, setSelectedBoxId] = useState(1); // 초기값 1로 설정

  // selectedBoxId에 따라 ITEMS_PER_PAGE 값 변경
  const ITEMS_PER_PAGE = selectedBoxId === 4 ? 6 : 9; // box4일 때는 6, 나머지는 9로 설정

  const totalPages = Math.ceil(CHOCOLATES.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 상자 ID 변경 핸들러 추가
  const handleBoxChange = (id) => {
    setSelectedBoxId(id);
    setCurrentPage(1); // 새로운 상자가 선택될 때 페이지를 1로 초기화
  };

  return (
    <S.Wrapper $selectedBoxId={selectedBoxId}>
      {selectedBoxId === 4 ? (
        <ChocoCheck22 currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} />
      ) : (
        <ChocoCheck33 currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} />
      )}
      <S.Logo src={LOGO} alt="Logo" />
      <S.Name>[김연진]의 초콜릿 상자</S.Name>
      <S.PageIndicator>{`${currentPage} / ${totalPages}`}</S.PageIndicator>
      <S.ButtonContainer>
        <BackBtn onClick={handlePreviousPage} disabled={currentPage === 1} />
        <NextBtn
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </S.ButtonContainer>
      임시로 상자 선택 버튼 추가
      <div>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <button key={id} onClick={() => handleBoxChange(id)}>
            Set Box {id}
          </button>
        ))}
      </div>
    </S.Wrapper>
  );
};

export default ChocoList;
