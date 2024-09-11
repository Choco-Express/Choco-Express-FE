import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChocoCheck33 = ({ currentPage, itemsPerPage, chocoData, error }) => {
  const [selectedChocoId, setSelectedChocoId] = useState(null);
  const navigate = useNavigate();

  // chocoType 값을 이미지 경로로 매핑하는 객체
  const imageMap = {
    1: "/assets/images/Chocolates/Chocolate_1.svg",
    2: "/assets/images/Chocolates/Chocolate_2.svg",
    3: "/assets/images/Chocolates/Chocolate_3.svg",
    4: "/assets/images/Chocolates/Chocolate_4.svg",
    5: "/assets/images/Chocolates/Chocolate_5.svg",
    6: "/assets/images/Chocolates/Chocolate_6.svg",
  };

  // 현재 페이지에 표시될 아이템 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chocoData.slice(startIndex, startIndex + itemsPerPage);

  const handleChocoClick = (id) => {
    setSelectedChocoId(id);
    console.log("Clicked Choco Id:", id);
    navigate(`/detailletter/${id}`);
  };

  if (error) {
    return <p>{error}</p>; // 오류 메시지 표시
  }

  return (
    <S.ListCheck>
      {currentItems.map((item) => (
        <S.Card
          key={item.id}
          onClick={() => handleChocoClick(item.id)}
          selected={selectedChocoId === item.id}
        >
          {/* chocoType 값을 사용하여 이미지 경로 매핑 */}
          <S.Image
            src={imageMap[item.chocoType] || "/images/chocolates/default.png"}
            alt={`Chocolate ${item.id}`}
          />
        </S.Card>
      ))}
    </S.ListCheck>
  );
};

export default ChocoCheck33;
