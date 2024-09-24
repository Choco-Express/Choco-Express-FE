import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { useState, useEffect } from "react";
import { instance } from "../../apis/instance";
import CloseButton from "../../assets/images/CloseButton.svg";
import DeleteButton from "../../assets/images/DeleteButton.svg";
import { LETTERS } from "../../constants/letters/data";

const DetailLetter = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [letterData, setLetterData] = useState(null);
  const [error, setError] = useState(null);

  // const chocoToLetterMapping = {
  //   1: 1,
  //   2: 2,
  //   3: 3,
  //   4: 4,
  //   5: 5,
  //   6: 6,
  // };

  useEffect(() => {
    const fetchLetterData = async () => {
      try {
        const response = await instance.get(`/api/choco/${id}`);
        console.log("API Response:", response.data);

        if (response.data && response.data.message === "SUCCESS") {
          setLetterData(response.data.result);
          setError(null);
        } else {
          console.error("Unexpected response structure:", response.data);
          setError("데이터를 불러오는 중 문제가 발생했습니다.");
        }
      } catch (error) {
        console.error("Failed to fetch letter data", error);
        if (error.response) {
          const { message } = error.response.data;
          setError(message || "알 수 없는 오류가 발생했습니다.");
        } else {
          setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    };

    fetchLetterData();
  }, [id]);

  const { state } = useLocation(); // * useLocation으로 state 가져오기
  const { chocoType } = state || {}; // * chocoType

  // * chocoType과 letter 이미지 매핑
  const letterDesignId = chocoType ? chocoType : 1;

  const selectedLetter = LETTERS.find((letter) => letter.id === letterDesignId);

  // 아래로는 삭제 코드 수정
  const handleDeleteClick = async () => {
    try {
      const response = await instance.delete(`/api/choco/${id}`);

      if (response.data) {
        console.log("삭제가 완료되었습니다.");

        navigate(-1);
      } else {
        console.error("Unexpected response structure:", response);
        alert("삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to delete data", error);
      alert("삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <S.DetailLetter>
        <HeartBackG />
        <S.LetterPosition>
          {error ? (
            <p>{error}</p>
          ) : letterData ? (
            <>
              <S.Letter
                // * selectedLetter의 src를 사용하여 편지 이미지 렌더링
                src={selectedLetter ? selectedLetter.src : ""}
                alt={`Letter ${letterData.id}`}
              />
              <S.textContainer>
                <p className="contents">{letterData.contents}</p>
                <div className="nickName">from. {letterData.nickname}</div>
              </S.textContainer>
              <S.CloseButton src={CloseButton} onClick={() => navigate(-1)} />
              <S.DeleteButton src={DeleteButton} onClick={handleDeleteClick} />
            </>
          ) : (
            <p>편지지를 찾을 수 없습니다</p>
          )}
        </S.LetterPosition>
      </S.DetailLetter>
    </>
  );
};

export default DetailLetter;
