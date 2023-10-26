import React from "react";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";
import { SecondCompo } from "./components/SecondCompo";
import { GetInTouch } from "./components/GetInTouch";
import { FollowMe } from "./components/FollowMe";
import { Reviews } from "./components/Reviews";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { CombinedComponent } from "./components/CombinedComponent";
export const App = () => {
  return (
    <div className="text-center text-green">
      <PrimeReactProvider>
        <Navbar />
        <MainPage />
        <GetInTouch />
        <SecondCompo />
        <CombinedComponent />
        {/* <div className="wrapperFor d-flex  justify-content-between align-items-center">
          <FollowMe />
          <Reviews />
        </div> */}
      </PrimeReactProvider>
    </div>
  );
};
