import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHOCOLATES } from "../../constants/Chocolates/data.js";

const ChocoCheck33 = ({ currentPage, itemsPerPage, chocoData, error }) => {
  const [selectedChocoId, setSelectedChocoId] = useState(null);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chocoData.slice(startIndex, startIndex + itemsPerPage);

  const handleChocoClick = (id, chocoType) => {
    // chocoType 추가
    setSelectedChocoId(id);
    console.log("Clicked Choco Id:", id, "Choco Type:", chocoType);
    navigate(`/detailletter/${id}`, { state: { chocoType } }); // * chocoType을 state로 함께 전달
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <S.ListCheck>
      {currentItems.map((item) => {
        const chocolate = CHOCOLATES.find(
          (choco) => choco.id === item.chocoType
        );

        return (
          <S.Card
            key={item.id}
            // * handleChocoClick 호출 시 chocoType을 인자로 추가
            onClick={() => handleChocoClick(item.id, item.chocoType)}
            selected={selectedChocoId === item.id}
          >
            <S.Image src={chocolate?.src} alt={`Chocolate ${item.id}`} />
          </S.Card>
        );
      })}
    </S.ListCheck>
  );
};

export default ChocoCheck33;
