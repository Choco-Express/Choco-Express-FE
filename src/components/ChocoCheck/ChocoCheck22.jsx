import * as S from "./ChocoChoco22";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LETTERS } from "../../constants/letters"; // LETTERS 배열을 임포트

const ChocoCheck22 = ({ currentPage, itemsPerPage, chocoData, error }) => {
  const [selectedChocoId, setSelectedChocoId] = useState(null);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chocoData.slice(startIndex, startIndex + itemsPerPage);

  const handleChocoClick = (id) => {
    setSelectedChocoId(id);
    console.log("Clicked Choco Id:", id);
    navigate(`/detailletter/${id}`);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <S.ListCheck>
      {currentItems.map((item) => {
        // chocoType에 맞는 이미지를 LETTERS에서 찾음
        const letter = LETTERS.find((letter) => letter.id === item.chocoType);

        return (
          <S.Card
            key={item.id}
            onClick={() => handleChocoClick(item.id)}
            selected={selectedChocoId === item.id}
          >
            <S.Image src={letter?.src} alt={`Chocolate ${item.id}`} />
          </S.Card>
        );
      })}
    </S.ListCheck>
  );
};

export default ChocoCheck22;
