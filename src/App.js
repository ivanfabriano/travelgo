// IMPORT LIBRARY
import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS & PAGES
import TopMenu from "./components/topmenu/TopMenu";
import BottomMenu from "./components/bottommenu/BottomMenu";
import Home from "./pages/home/Home";
import Help from "./pages/help/Help";
import LiveChat from "./pages/livechat/LiveChat";
import ShowSchedule from "./pages/reservation/ShowSchedule";
import PersonalForm from "./pages/reservation/PersonalForm";
import ChooseSeat from "./pages/reservation/ChooseSeat";
import Checkout from "./pages/reservation/Checkout";

const App = () => {
  return (
    <div>
      <TopMenu />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="live-chat" element={<LiveChat />} />
        <Route path="show-schedule" element={<ShowSchedule />} />
        <Route path="personal-information" element={<PersonalForm />} />
        <Route path="choose-seat" element={<ChooseSeat />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <BottomMenu />
    </div>
  );
};

export default App;
