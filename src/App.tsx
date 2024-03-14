import './app-styles'
import { MainContainer } from "./app-styles";
import Home from "./pages/home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./pages/shorts/index";
import Subscribe from "./pages/subscriptions/index";
import Library from "./pages/library/index";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login/index";
import YourVideos from "./pages/yourvideos/index";
import SearchPage from "./pages/search/index";
import SignUp from './pages/sign-up/index';
import "./../src/index.module.css";

function App() {
  return (
    <BrowserRouter>
    <UserStorage>
      <div className="App">
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/library" element={<Library />} />
            <Route path="/login" element={<Login />} />
            <Route path="/yourvideos" element={<YourVideos />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </MainContainer>
      </div>
    </UserStorage>
  </BrowserRouter>
  );
}

export default App;
