import { useContext } from "react";
import { Container, MenuItem, ButtonIcon } from "./styles";
import { MenuContext } from "../../contexts/menuContext";

import Home from "../../assets/home_icon.png";
import ShortsIcon from "../../assets/shorts_icon.png";
import SubscriptionsIcon from "../../assets/sino.png";
import YoutubeMusicIcon from "../../assets/sino.png";
import YourChannelIcon from "../../assets/sino.png";
import HistoryIcon from "../../assets/sino.png";
import YourVideosIcon from "../../assets/sino.png";
import WatchLaterIcon from "../../assets/sino.png";
import DownloadsIcon from "../../assets/sino.png";
import TrendingIcon from "../../assets/sino.png";
import MusicIcon from "../../assets/sino.png";
import MoviesIcon from "../../assets/sino.png";
import LiveIcon from "../../assets/sino.png";
import GamingIcon from "../../assets/sino.png";
import NewsIcon from "../../assets/sino.png";
import SportsIcon from "../../assets/sino.png";
import LearningIcon from "../../assets/sino.png";
import PodcastsIcon from "../../assets/sino.png";
import SettingsIcon from "../../assets/sino.png";
import ReportHistoryIcon from "../../assets/sino.png";
import HelpIcon from "../../assets/sino.png";
import SendFeedbackIcon from "../../assets/sino.png";

//const items =[0,0,0] //array simulando a lista de itens do menu que viria do backend;

const items = [
  "Home",
  "Shorts",
  "Subscriptions",
  "Your channel",
  "History",
  "Your Videos",
  "Watch Later",
];

const itemOBJ = {
  Home: "HomeIcon",
  Shorts: "ShortsIcon",
  Subscriptions: "SubscriptionsIcon",
};



function Menu() {
  const { menuState } = useContext(MenuContext);

  return (
    <Container menuState={menuState}>
      {items.map((item) => (
        <MenuItem menuState={menuState}>
          <ButtonIcon alt="" src={Home} />
          <span>{item}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
