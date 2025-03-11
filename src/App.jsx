import React from "react";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Problematica from "./components/problematica/Problematica";
import FeaturesSection from "./components/features/Features";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Problematica />
      <FeaturesSection />
    </div>
  );
};

export default App;
