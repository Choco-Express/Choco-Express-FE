import { BOXES } from "../../constants/Boxes/data";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

const BoxSelector = ({ coment, selectedBox, onSelectBox, onNext }) => {
  const navigate = useNavigate();

  const handleBoxClick = (id) => {
    onSelectBox(id);
    console.log("박스 Id:", id);
  };

  const handleNextClick = () => {
    if (selectedBox) {
      onNext();
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <div>{coment}</div>
      <S.BoxContainer>
        <S.BoxGrid>
          {BOXES.map((box) => (
            <S.BoxItem
              key={box.id}
              selected={selectedBox === box.id}
              onClick={() => handleBoxClick(box.id)}
            >
              <img src={box.src} alt={box.id} />
            </S.BoxItem>
          ))}
        </S.BoxGrid>
      </S.BoxContainer>
      <S.buttonContainer>
        <S.Btn onClick={handleBackClick}>이전</S.Btn>
        <S.Btn onClick={handleNextClick}>다음</S.Btn>
      </S.buttonContainer>
    </S.Wrapper>
  );
};

export default BoxSelector;
