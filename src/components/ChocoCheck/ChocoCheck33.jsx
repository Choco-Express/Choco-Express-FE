import * as S from "./styled";
import { CHOCOLATES } from "../../constants/Chocolates/data";

const ChocoCheck33 = ({ currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = CHOCOLATES.slice(startIndex, startIndex + itemsPerPage);

  return (
    <S.ListCheck>
      {currentItems.map((item) => (
        <S.Card key={item.id}>
          <S.Image src={item.src} alt={`Chocolate ${item.id}`} />
        </S.Card>
      ))}
    </S.ListCheck>
  );
};

export default ChocoCheck33;
