import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: blue;
  height: 100vh;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: yellow;
  padding: 2px;
  height: 30vh;
  border: 6px solid pink;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const Column = styled.div`
  width: 100%;
  background-color: red;
`;
