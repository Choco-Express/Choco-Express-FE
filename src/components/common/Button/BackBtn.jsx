import * as S from "./styled";
export const BackBtn = ({ onClick }) => {
  return (
    <S.Btn onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
      >
        <path
          d="M9 1L2 8.5L9 16"
          stroke="#FEF7E2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div>이전</div>
    </S.Btn>
  );
};
