import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 500;
  font-size: 2rem;
  color: #a1a1a1;
  border-radius: 0.3rem;
  border: 1px solid #a1a1a1;
  background-color: #ddd;

  &:hover {
    background-color: #444;
    outline: #222;
    cursor: pointer;
  }

  &:disabled {
    color: #dedada;
    background-color: #fafafa;
    border: 1px solid #dadada;
    cursor: default;
  }
`;

export const Calculator = styled.div`
  width: 300px;
  height: 500px;
  display: grid;
  grid-template-areas:
    'total total total total'
    'modif modif modif oper'
    'digit digit digit oper'
    'digit digit digit oper'
    'digit digit digit oper'
    'digit digit digit oper';
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
`;

export const NumberList = styled.section`
  grid-area: digit;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  > button:last-child {
    grid-column: 1 / 4;
  }
`;

export const Formula = styled.section`
  grid-area: total;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  height: 10rem;
  background-color: #333;
  color: white;
  padding: 1rem;

  font-size: 3rem;

  > h1 {
    margin: 1rem 0 0;
  }

  > h5 {
    margin: 0;
    font-size: 2rem;
  }
`;

export const OperList = styled.section`
  grid-area: oper;
  display: flex;
  flex-direction: column;
  > button {
    flex-grow: 1;
  }
`;

export const Modifiers = styled.button`
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  font-size: 2rem;
  background-color: #ccc;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid #a1a1a1;

  &:hover {
    background-color: #444;
    outline: #222;
    cursor: pointer;
  }

  &:disabled {
    color: #dedada;
    background-color: #fafafa;
    border: 1px solid #dadada;
    cursor: default;
  }
`;
