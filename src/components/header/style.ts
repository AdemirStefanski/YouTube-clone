import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding:  16px;
  box-sizing: border-box; //não altera o tamanho do elemento com a adição do padding.
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; //para o header ficar fixo no topo. Sem necessidade do top: , pois é o primeiro elemento e já esta no topo da página.
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;
