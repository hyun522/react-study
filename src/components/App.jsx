import styled from "styled-components";
import Calculator from "./calculator/Calculator";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Main>
      <Calculator />
    </Main>
  );
}
