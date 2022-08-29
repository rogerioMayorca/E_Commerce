import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.white ? "#FFF" : "#000")};
  color: ${(props) => (props.white ? "#000" : "#FFF")};
  height: 35px;
  border-radius: 8px;
  border: none;
  margin-top: 5px;
  width: 100%;
  font-size: 1rem;
  :hover {
    border: 2px solid black;
  }
  z-index: 3000;
  opacity: 200%;
`;
