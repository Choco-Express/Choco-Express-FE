import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  color: white;
  gap: 20px;
  height: 437px;
  align-items: center;
  margin-top: 5rem;
`;

export const Btn_list = styled.div`
  display: flex;
  position: absolute;
  top: 150px;
  flex-direction: column;
  gap: 0.6875rem; // 11px
`;

export const Btn_Kakaologin = styled.div`
  display: flex;
  width: 13.75rem; // 220px
  height: 3rem; // 48px
  justify-content: center;
  align-items: center;
  gap: 0.5rem; // 8px

  border-radius: 0.375rem; // 6px
  background: #FEE500;

  color: #000;
  font-family: Pretendard;
  font-size: 1.125rem; // 18px
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Btn_Googlelogin = styled.div`
  display: flex;
  width: 13.75rem; // 220px
  height: 3rem; // 48px
  justify-content: center;
  align-items: center;
  gap: 0.5rem; // 8px

  border-radius: 0.375rem; // 6px
  background: #FFF;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  color: rgba(0, 0, 0, 0.54);
  font-family: Pretendard;
  font-size: 1.125rem; // 18px
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Btn_Naverlogin = styled.div`
  display: flex;
  width: 13.75rem; // 220px
  height: 3rem; // 48px
  justify-content: center;
  align-items: center;
  gap: 0.625rem; // 10px

  border-radius: 0.375rem; // 6px
  background: #03C75A;

  color: #FFF;
  font-family: Pretendard;
  font-size: 1.125rem; // 18px
  font-style: normal;
  font-weight: 600;
`;