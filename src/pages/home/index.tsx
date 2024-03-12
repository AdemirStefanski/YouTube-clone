import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";

const videos = [{image: "", title: "", channel: "", viewes: "", time: ""}]

function Home() {
  const { menuState } = useContext(MenuContext);
  return (
    <Container menuState={menuState}>
      {videos.map((video) => (

        <VideoComponent video={video}/>
      ))}
      


    </Container>
  ) 
}

export default Home;
