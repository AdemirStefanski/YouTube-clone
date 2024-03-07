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
import Shorts from "./pages/shorts";

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ width: "100%", display: "flex"}}>
          <Menu  />
          <div style={{width: "100%", padding: "50px 70px", boxSizing: "border-box", display: "flex", justifyContent: "center"}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/yourchannel" element={<Yourchannel />} />
              <Route path="/history" element={<History />} />
              <Route path="/yourvideos" element={<Yourvideos />} />
              <Route path="/watchlater" element={<Watchlater />} />
            </Routes>

          </div>
          <div>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


