import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Subscriptions from "./pages/subscriptions";
import Yourchannel from "./pages/yourchannel";
import History from "./pages/history";
import Yourvideos from "./pages/yourvideos";
import Watchlater from "./pages/watchlater";
import Login from "./pages/login";
import Shorts from "./pages/shorts";
import SubMenu from "./components/submenu";
import { UserStorage } from "./context/userContext";

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div style={{ width: "100%", display: "flex" }}>
            <Menu />
            <div
              style={{
                width: "100%",
                padding: "50px 70px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <SubMenu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/yourchannel" element={<Yourchannel />} />
                <Route path="/history" element={<History />} />
                <Route path="/yourvideos" element={<Yourvideos />} />
                <Route path="/watchlater" element={<Watchlater />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <div></div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
