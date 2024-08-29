import React from "react";
import { styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { Outlet } from "react-router-dom";

const Frame = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  position: absolute;
  z-index: 0;
  background-color: #fef7e2;
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <Frame>
      <Wrapper>
        <Content>
          <Outlet />
          최종 test
        </Content>
      </Wrapper>
    </Frame>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
