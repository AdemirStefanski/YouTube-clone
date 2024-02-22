import styled from "styled-components";

export const Container = styled.div<{ menuState: boolean }>`
width: ${({ menuState }) =>menuState? "250px" : "100px"};
height: 100vh;
box-sizing: border-box;
padding: 65px 10px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto; //quando os itens ultrapassarem o limite da div, será criado um scroll automaticamente.  
`;

export const MenuItem = styled.div`
width: 90%;
min-height: 40px;
border-radius: 10px;
cursor: pointer;

  &:hover {
      background-color: #f2f2f2;
  }
`;

