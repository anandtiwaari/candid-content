import React from "react";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";
import { SecondCompo } from "./components/SecondCompo";
import { GetInTouch } from "./components/GetInTouch";
import { FollowMe } from "./components/FollowMe";

export const App = () => {
  return (
    <div className="text-center text-green">
      <Navbar />
      <MainPage />
      <GetInTouch />
      <SecondCompo />
      <FollowMe />
    </div>
  );
};
