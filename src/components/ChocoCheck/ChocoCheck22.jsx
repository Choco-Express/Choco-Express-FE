import * as S from "./ChocoChoco22";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHOCOLATES } from "../../constants/Chocolates/data.js";

const ChocoCheck22 = ({ currentPage, itemsPerPage, chocoData, error }) => {
  const [selectedChocoId, setSelectedChocoId] = useState(null);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chocoData.slice(startIndex, startIndex + itemsPerPage);

  const handleChocoClick = (id, chocoType) => {
    // chocoType 인자
    setSelectedChocoId(id);
    console.log("Clicked Choco Id:", id, "Choco Type:", chocoType);
    navigate(`/detailletter/${id}`, { state: { chocoType } }); // * chocoType을 state로
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

export default ChocoCheck22;
