import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50vw;
  min-height: 24px;
  border-bottom: 1px solid #ddd;
  padding-left: 1rem;

  font-size: 1rem;
  > button {
    display: none;
  }

  &:hover {
    > button {
      display: inline-block;
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: #ddd;
  padding: 5px;

  font-size: 10px;
`;
