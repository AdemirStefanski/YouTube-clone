import { Container, LibraryContainer } from "./styles";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/index";
import Menu from "../../components/menu/index";

function Library() {

  const { openMenu } = useAppContext();

  return (
    <LibraryContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Library</h1>
      </Container>
    </LibraryContainer>
  )
}

export default Library;