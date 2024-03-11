import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { Container, BackButton, SubMenuItem, ForwardButton, ButtonContainer  } from "./styles";

import BackButtonIcon from "../../assets/back_button.png"
import ForwardButtonIcon from "../../assets/forward_button.png"

const subMenuItems = [
  { name: "All", link: "/"},
  { name: "Live", link: "/"},
  { name: "Gaming", link: "/"},
  { name: "Music", link: "/"},
  { name:  "Mixes", link: "/"},
  { name: "Avatar: The Last Airbender", link: "/"},
  { name: "Strategy video games", link: "/"},
  { name: "Japanese Cuisine", link: "/"},
  { name: "Musical ensembles", link: "/"},
  { name: "Classic Music", link: "/"},
  { name: "Recently uploaded", link: "/"},
  { name: "Watched", link: "/"},
  { name: "New to you", link: "/"},
  { name: "Recently uploaded", link: "/"},
  { name: "Watched", link: "/"},
  { name: "New to you", link: "/"},
  { name: "Recently uploaded", link: "/"},
  { name: "Watched", link: "/"},
  { name: "New to you", link: "/"},
];

function SubMenu() {

  

  const { menuState } = useContext(MenuContext);
  const navigate = useNavigate();


  
  return (
    <Container menuState={menuState}>
      <ButtonContainer>
        <BackButton alt="" src={BackButtonIcon}/>
      </ButtonContainer>
      {subMenuItems.map((item) => (
        <SubMenuItem menuState = {menuState} onClick={() => navigate(item.link)} >
          <span>{item.name}</span>
        </SubMenuItem>
      ))}
      <ButtonContainer>
        <ForwardButton alt="" src={ForwardButtonIcon} />
      </ButtonContainer>
      
    </Container>
  );
}

export default SubMenu;
