import { 
  Container, 
  LogoContainer, 
  ButtonContainer, 
  ButtonIcon, 
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton
  
} from "./styles";

import HamburguerIcon from "../..//assets/hamburger.png"
//import Logo from "../../assets/YouTube-Logo.png" //Logo oficial do youtube.
//import Logo from "../../assets/YTCat.gif" //Yoodles oficial do Youtube (International Cat Day (August 8th)) single looping.
import Logo from "../../assets/YouTubeCat.gif" //Yoodles oficial do Youtube (International Cat Day (August 8th)) infinite looping.
import SearchIcon from "../../assets/search.png"
import MicIcon from "../../assets/microfone-gravador.png"
import VideoIcon from "../../assets/video.png"
import NotificationIcon from "../../assets/sino.png"
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";


function Header() {
  const { login } = useContext(UserContext);
  const {menuState, setMenuState} = useContext(MenuContext);
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer onClick={() => setMenuState(!menuState)} margin= "0 10px 0 0">
          <ButtonIcon alt="" src={HamburguerIcon} />
        </ButtonContainer>
        <img
          style={{cursor:"pointer", width: "100px"}}
          alt=""
          src={Logo}
         />
      </LogoContainer>

      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar" />

        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        <ButtonContainer margin= "0 0 0 10px">
          <ButtonIcon alt="" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      <HeaderButton>
        <ButtonContainer margin= "0 0 0 10px">
          <ButtonIcon alt="" src={VideoIcon} />
        </ButtonContainer>
        <ButtonContainer margin= "0 0 0 10px">
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>

        {login? 

        <ButtonContainer margin= "0 0 0 10px">
          AS
        </ButtonContainer>

        :

        <button onClick={() => navigate("/login")}> Fazer Login</button>
        
        }
        

      </HeaderButton>

    </Container>
  )
}


export default Header;

