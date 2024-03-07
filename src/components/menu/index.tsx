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
import { useNavigate } from "react-router-dom";

//const items =[0,0,0] //array simulando a lista de itens do menu que viria do backend;

const items = [
  {name: "Home", link: "/"},
  {name: "Shorts", link: "/shorts"},
  {name: "Subscriptions", link: "/subscriptions"},
  {name: "Your channel", link: "/yourchannel"},
  {name: "History", link: "/history"},
  {name: "Your Videos", link: "/yourvideos"},
  {name: "Watch Later", link: "/watchlater"}
  
];


function Menu() {
  const { menuState } = useContext(MenuContext);
  const navigate = useNavigate();
  return (
    <Container menuState={menuState}>
      {items.map((item) => (
        <MenuItem menuState={menuState} onClick={() => navigate(item.link)}>
          <ButtonIcon alt="" src={Home} />
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
