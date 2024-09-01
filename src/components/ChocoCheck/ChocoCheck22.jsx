import * as S from "./ChocoChoco22";
import { CHOCOLATES } from "../../constants/Chocolates/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChocoCheck22 = ({ currentPage, itemsPerPage }) => {
  const [selectedChocoId, setSelectedChocoId] = useState(null);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = CHOCOLATES.slice(startIndex, startIndex + itemsPerPage);

  const handleChocoClick = (id) => {
    setSelectedChocoId(id);
    console.log("Clicked Choco Id:", id);
    navigate(`/detailletter/${id}`);
  };

  return (
    <S.ListCheck>
      {currentItems.map((item) => (
        <S.Card
          key={item.id}
          onClick={() => handleChocoClick(item.id)}
          selected={selectedChocoId === item.id}
        >
          <S.Image src={item.src} alt={`Chocolate ${item.id}`} />
        </S.Card>
      ))}
    </S.ListCheck>
  );
};

export default ChocoCheck22;
