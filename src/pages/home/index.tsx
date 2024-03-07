import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";

function Home() {
  const { menuState } = useContext(MenuContext);
  return (
    <Container menuState={menuState}>
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />


    </Container>
  ) 
}

export default Home;
