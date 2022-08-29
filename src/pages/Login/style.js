import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #adadad;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;

  img {
    width: 450px;
    object-fit: cover;
    position: absolute;
    opacity: 18%;
    margin-top: -98px;
    margin-left: -130px;
    z-index: 100;
    border: 1px solid white;
    box-shadow: 7px 11px 5px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
