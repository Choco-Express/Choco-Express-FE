import * as S from "./styled";
export const NextBtn = ({ onClick, label = "다음" }) => { // 다음을 기본값으로 두고 원하는대로 바꿀 수 있습니다.
  return (
    <S.Btn onClick={onClick}>
      <div>{label}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
      >
        <path
          d="M1 16L8 8.5L1 0.999999"
          stroke="#FEF7E2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </S.Btn>
  );
};
