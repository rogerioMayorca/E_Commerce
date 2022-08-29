import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    height: 45px;
    width: 500px;
    align-items: center;

    button {
      height: 45px;
      width: 80px;
      border: none;
      background-color: white;
    }

    img {
      height: 30px;
      margin-left: 20px;
      margin-top: 9px;
    }
  }
`;

export const HeaderInput = styled.input`
  height: 45px;
  width: 400px;
  display: flex;
  text-align: center;
  padding-left: 60px;
  border: none;
`;
