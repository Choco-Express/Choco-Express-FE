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
  height: 100%;
  width: 420px;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: pink;
  width: 70%;
  height: 33vh;
  border-radius: 33px;
`;
