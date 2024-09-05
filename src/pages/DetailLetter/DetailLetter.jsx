import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import { LETTERS } from "../../constants/letters/data";
import CloseButton from "../../assets/images/CloseButton.svg";
import DeleteButton from "../../assets/images/DeleteButton.svg";

const DetailLetter = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const chocoToLetterMapping = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  };

  const letterId = chocoToLetterMapping[Number(id)];

  const selectedLetter = LETTERS.find((letter) => letter.id === letterId);

  const handleDeleteClick = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <>
      <S.DetailLetter>
        <HeartBackG />
        <S.LetterPosition>
          {selectedLetter ? (
            <>
              <S.Letter
                src={selectedLetter.src}
                alt={`Letter ${selectedLetter.id}`}
              />

              <S.textContainer>
                <p className="contents">
                  안녕하세용가리 fjdkfjdkjfdlfjdlfjdljfdljfdf
                </p>
                <div className="nickName">from.ㅋㅋ</div>
              </S.textContainer>
              <S.CloseButton src={CloseButton} onClick={handleDeleteClick} />
              <S.DeleteButton src={DeleteButton} />
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
