import {
  Container,
  LogoContainer,
  ButtonContainer,
  ButtonIcon,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  Logo123,
  HeaderButtons,
  LinkLogo,
  LoginContainer,
  LoginButton,
  Span,
  LoginIcon,
  DropDownMenu,
  DropDownMenuContent,
  LogOutButton,
  UserInfoContainer,
  UserName,
  ClearButton,
  CloseImg,
  SearchButtonResponsive,
  BackButton
} from "./styles";

import HamburguerIcon from "../..//assets/hamburger.png";
import Logo from "../../assets/YouTubeCat.gif"; //Yoodles oficial do Youtube (International Cat Day (August 8th)) infinite looping.
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import { useContext, useRef, useState } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from "../../contexts/searchContext";
import { useAppContext } from "../../contexts/openMenu";
import { useCategoryContext } from "../../contexts/searchCategories";
import BackButtonIcon from "../../assets/back_button.png";
import ForwardButtonIcon from "../../assets/forward_button.png";
import CloseIcon from "../../assets/close.png";
import logout from "../../assets/logout.png";
import LoginIconPng from "../../assets/login-icon.png"
import { Navigate } from "react-router-dom";

const Header: React.FC = () => {

  const { openMenu, setOpenMenu } = useAppContext();

  const [clearButton, setClearButton] = useState(false)

  const [openSearch, setOpenSearch] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null);

  const Search = () => {
    setOpenSearch(true)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }


  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext)



  const handleDropDownMenu = () => {
    setOpenDropDownMenu(!openDropDownMenu)
  }

  const { setSearch } = useSearchContext()

  const [inputValue, setInputValue] = useState('')

  function handleInput(inputValue: string) {
    setInputValue(inputValue)
    if (inputValue === '') {
      setClearButton(false)
    } else (
      setClearButton(true)
    )
  }


  const clearInput = () => {
    setInputValue('')
    setClearButton(false)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const goOut = () => {
    logOut()
    handleDropDownMenu()
    navigate('/')
  }

  const goYourVideos = () => {
    navigate('/yourvideos')
    handleDropDownMenu()
  }

  const { setCategoryId } = useCategoryContext()


  
  return (
    <Container>

      <LogoContainer>

        <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
          <ButtonIcon alt="logo menu" src={HamburguerIcon} />
        </ButtonContainer>

        <LinkLogo to='/' onClick={() => setCategoryId('0')}>
          <Logo123 alt="logo youtube" src={Logo} />
        </LinkLogo>

      </LogoContainer>

      <SearchButtonResponsive onClick={Search}>
        <ButtonIcon alt="ícone lupa" src={SearchIcon} />
      </SearchButtonResponsive>

      <SearchContainer openSearch={openSearch}>

        <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
          <img alt="Botão voltar" src={BackButtonIcon} style={{ width: '20px' }} />
        </BackButton>

        <SearchInputContainer>
          <SearchInput
            ref={inputRef}
            value={inputValue}
            placeholder="Pesquisar"
            onChange={(e) => { //onChange chama uma função anônima que recebe um evento que vai mudar a variável de estado que foi criada com useState. Esse valor quando alterado é modificado simultaneamente com a funcção handleInput.  
              handleInput(e.target.value)
            }}
            onKeyDown={(e) => { //funcionalidade onKeyDown onde detecta quando um tecla é clicada e caso essa seja designada for clicada, ele á chama a função e já navega para a página de exibição do conteúdo.
              if (e.key === "Enter") {
                setSearch(inputValue)
                navigate('/search') //vavigate do React-Router-Dom para navegar para a página de destino.
                setOpenSearch(false)
              }
            }}
          />
          <ClearButton
            clearButton={clearButton}
            onClick={clearInput}
          >

            <CloseImg src={CloseIcon} />

          </ClearButton>

        </SearchInputContainer>

        <SearchButton
          onClick={() => {
            if (inputValue.trim() === '') { //validação caso esteja vazio;
              alert('Digite alguma palavra chave antes de tentar pesquisar')
              return;
            }
            setSearch(inputValue) //vai mudar a variável de contexto global e assim que mudança vai ser detectada pela searchpage, e assim será feito o carregamento da função load.
            navigate('/search')
          }}
        >
          <ButtonIcon alt="ícone lupa" src={SearchIcon} />
        </SearchButton>

        <ButtonContainer margin='0 0 0 10px' responsive688>
          <ButtonIcon alt="ícone microfone" src={MicIcon} />
        </ButtonContainer>


      </SearchContainer>

      {login ?
        <HeaderButtons>
          <ButtonContainer onClick={() => navigate('/yourvideos')} >
            <ButtonIcon alt="ícone vídeo" src={VideoIcon} />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 10px' responsive600 >
            <ButtonIcon alt="ícone notificação" src={NotificationIcon} />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 10px' onClick={handleDropDownMenu} >
            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
          </ButtonContainer>

          <DropDownMenu openDropDownMenu={openDropDownMenu}>

            <UserInfoContainer>
              <ButtonContainer
                margin='0 0 0 10px'
                onClick={handleDropDownMenu}
                style={{ backgroundColor: '#f2f2f2' }}
              >
                {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
              </ButtonContainer>
              <UserName>{user && user.name ? user.name : ''}</UserName>
            </UserInfoContainer>

            <DropDownMenuContent onClick={goOut}>
              <ButtonIcon alt="ícone logout" src={logout} />
              <LogOutButton>
                Sair
              </LogOutButton>
            </DropDownMenuContent>

            <DropDownMenuContent onClick={goYourVideos}>
              <ButtonIcon alt="ícone logout" src={VideoIcon} />
              <LogOutButton>
                Seus vídeos
              </LogOutButton>
            </DropDownMenuContent>

          </DropDownMenu>

        </HeaderButtons>
        :
        <LoginContainer onClick={() => navigate('/login')}>
          <LoginButton>
            <LoginIcon alt="Login Icon" src={LoginIconPng} />
            <Span>Fazer login</Span>
          </LoginButton>
        </LoginContainer>
      }


    </Container>
  )
}

export default Header;