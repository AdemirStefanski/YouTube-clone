import { useContext } from "react";
import { 
  Container,
  MenuItem
  
} from "./styles";
import { MenuContext } from "../../contexts/menuContext";

const items =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] //array simulando a lista de itens do menu que viria do backend;



function Menu() {
  const {menuState} = useContext(MenuContext);    
  
  return (
    <Container menuState={menuState}>
      {items.map(() => (
        <MenuItem>
          Início
        </MenuItem>
      ))}


    </Container>
  )
}


export default Menu;

