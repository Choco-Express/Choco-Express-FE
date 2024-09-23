import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./style/globalStyle";

const Wrapper = styled.section`
  flex-grow: 1;
  min-height: 100vh;
  /* width: 100%; */

  background-color: #fef7e2;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
