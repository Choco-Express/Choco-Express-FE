import { useState, useEffect } from "react";
import * as S from "./styled";
import LOGO from "../../assets/images/mainLogo.svg";
import ChocoCheck33 from "../../components/ChocoCheck/ChocoCheck33";
import ChocoCheck22 from "../../components/ChocoCheck/ChocoCheck22";
import { NextBtn } from "../../components/common/Button/NextBtn";
import { BackBtn } from "../../components/common/Button/BackBtn";
import { instance } from "../../apis/instance";

const ChocoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBoxId, setSelectedBoxId] = useState(1);
  const [chocoData, setChocoData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const ITEMS_PER_PAGE = selectedBoxId === 4 ? 6 : 9;

  const getChocoList = async (page) => {
    try {
      const response = await instance.get(`/api/choco?page=${page}`);
      console.log("API Response:", response.data);

      if (response.data && response.data.message === "SUCCESS") {
        const { chocoList, totalPage } = response.data.result;
        setChocoData(chocoList);
        setTotalPages(totalPage);
        setError(null);
      } else {
        console.error("Unexpected response structure:", response.data);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error("Failed to fetch choco data", error);
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    getChocoList(currentPage);
  }, [currentPage]);

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

  const handleBoxChange = (id) => {
    setSelectedBoxId(id);
    setCurrentPage(1);
  };

  return (
    <S.Wrapper $selectedBoxId={selectedBoxId}>
      {selectedBoxId === 4 ? (
        <ChocoCheck22
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          chocoData={chocoData}
          error={error}
        />
      ) : (
        <ChocoCheck33
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          chocoData={chocoData}
          error={error}
        />
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
    </S.Wrapper>
  );
};

export default ChocoList;
