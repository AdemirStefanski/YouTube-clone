import { Container, LogoContainer, ButtonContainer, ButtonIcon } from "./style";
import HamburguerIcon from "../..//assets/hamburger.png"
//import Logo from "../../assets/YouTube-Logo.png" //Logo oficial do youtube.
//import Logo from "../../assets/YTCat.gif" //Yoodles oficial do Youtube (International Cat Day (August 8th)) single looping.
import Logo from "../../assets/YouTubeCat.gif" //Yoodles oficial do Youtube (International Cat Day (August 8th)) infinite looping.

function Header() {
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer>
          <ButtonIcon alt="" src={HamburguerIcon} />
        </ButtonContainer>
        <img
          style={{cursor:"pointer", width: "100px"}}
          alt=""
          src={Logo}
         />
      </LogoContainer>

    </Container>
  )
}


export default Header;

