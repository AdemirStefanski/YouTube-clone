import styled from "styled-components";

export const Container = styled.div<{ menuState: boolean }>`
  width: 100%;
  max-width: 1000px;
  height: 55 px;
  margin: 8px auto;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  align-items: center;
  position: relative;
  //overflow: hidden; //desabilita a barra de rolagem
  /* -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;

  } */
  &::-webkit-scrollbar {
    background: transparent; /* make scrollbar transparent */
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }

`;



export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
`;

export const BackButton = styled.img`
  width: 20px;
  position: absolute;
  background: linear-gradient(to right, #fff 50%, transparent);
  padding-right: 80px;
  left: 0;
`;

export const ForwardButton = styled.img`
  width: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  background: linear-gradient(to left, #fff 50%, transparent);
  padding-left: 80px;
`;

export const SubMenuItem = styled.div<{ menuState: boolean }>`
  padding: 10px;
  border-radius: 12px;
  background-color: #f2f2f2;
  height: 50 px;
  width: auto;

  margin: 8px;
  cursor: pointer;
  white-space: nowrap; //não quebra o texto
  font-weight: 500;
  user-select: none; //não deixa selecionar o texto;

  &:hover {
    background-color: #e5e5e5;
  }
`;
