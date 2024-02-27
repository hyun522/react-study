import styled from 'styled-components';

const Button = styled.button`
  margin: 0.3rem;
  font-weight: 500;
  font-size: 2rem;
  color: #865a82;
  border-radius: 0.3rem;
  border: 1px solid #ee9ee6;
  background-color: rgba(233, 183, 225, 0.515);

  &:hover {
    background-color: #ee9ee67c;
    outline: #ee9ee6;
    cursor: pointer;
  }

  &:disabled {
    color: #dedada;
    background-color: #fafafa;
    border: 1px solid #dadada;
    cursor: default;
  }
`;

export { Button };
