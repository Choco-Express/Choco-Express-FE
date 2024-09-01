import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import
import * as S from "./styled";
import HeartBackG from "../../components/common/Heartbackground/heartBackG";
import Letter1 from "../../assets/images/letter/letter1.svg";
import CloseButton from "../../assets/images/CloseButton.svg";
import DeleteButton from "../../assets/images/DeleteButton.svg";

const DetailLetter = () => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    navigate(-1);
  };

  return (
    <>
      <S.DetailLetter>
        <HeartBackG />
        <S.LetterPosition>
          <S.Letter src={Letter1} />
          <S.CloseButton src={CloseButton} onClick={handleDeleteClick} />
          <S.DeleteButton src={DeleteButton} />
        </S.LetterPosition>
      </S.DetailLetter>
    </>
  );
};

export default DetailLetter;
