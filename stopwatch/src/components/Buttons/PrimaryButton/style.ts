import styled from "styled-components";

const STATES = {
  start: "#7fe07f94",
  stop: "#feadad",
  lap: "#7fe07f94",
  reset: "#ddd",
};

const borderColor = {
  start: "#9ce19c",
  stop: "#ff9090",
  lap: "#9ce19c",
  reset: "#d6d6d6",
};

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  width: 100%;
  text-align: center;

  background-color: ${({ state }) => STATES[state] ?? "#7fe07f94"};
  border: 4px solid ${({ state }) => borderColor[state] ?? "#cdcd"};

  font-weight: 600;
  color: #444;
`;
