import styled from "styled-components";

export const ListField = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: #bebebe;
  padding: 10px;
  gap: 10px;
  text-align: center;
  width: 200px;
  height: 100vh;
`;

export const Item = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #767676;
  cursor: pointer;

  font-size: 1.5rem;
`;
