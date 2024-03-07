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

export const MenuItem = styled.div<{menuState: boolean}>`
width: 90%;
min-height: ${({ menuState }) =>menuState? "40px" : "70px"};
border-radius: 10px;
cursor: pointer;
padding: 2px 17px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ menuState }) =>menuState? "row" : "column"};
align-items: center;
justify-content: ${({ menuState }) =>menuState? "none" : "center"};

span {
  font-weight: ${({ menuState }) =>menuState? "600" : "400"};
  margin-left: ${({ menuState }) =>menuState? "20px" : "none"};
  font-size: ${({ menuState }) =>menuState? "16px" : "12px"};
  text-align: ${({ menuState }) =>menuState? "none" : "center"};
}

  &:hover {
      background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;