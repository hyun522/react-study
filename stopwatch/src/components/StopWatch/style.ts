import styled from "styled-components";

export const Container = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonLine = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  border-bottom: ${(props) => (props.lapsLength ? "1px solid #ddd" : "none")};
`;
